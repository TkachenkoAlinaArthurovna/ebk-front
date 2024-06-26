'use client';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { Form, Formik, Field } from 'formik';

import { useAuth } from '@/redux/contexts/AuthContext';
import { removeCartProducts } from '@/redux/slices/CartSlice';
import { removeUserCartProducts } from '@/redux/slices/UserCartSlice';
import { setUserCartProducts } from '@/redux/slices/UserCartSlice';
import { setDataForPaymentModal } from '@/redux/slices/DataForPaymentModalSlice';
import { setDataForOrder } from '@/redux/slices/DataForOrderSlice';
import { resetDataForOrder } from '@/redux/slices/DataForOrderSlice';

import BreadCrumbs from '@/app/ui/BreadCrumbs/BreadCrumbs';
import CartItem from '@/app/ui/CartPage/CartItem/CartItem';
import Content from '@/app/ui/Content';
import {
  StyledCartLayout,
  StyledOrderWrapper,
  WrapperCartProducts,
  Wrapper,
  StyledCheckoutButton,
  StyledList,
  StyledListItem,
  StyledTermsTitle,
  WrapperForLoading,
} from '@/app/ui/CartPage/CartPageStyles';
import EmptyCart from './EmptyCart/EmptyCart';
import Delivery from '@/app/ui/CartPage/Delivery';
import UserInfo from '@/app/ui/CartPage/UserInfo';
import Payment from '@/app/ui/CartPage/Payment';
import Comment from '@/app/ui/CartPage/Comment';
import Total from '@/app/ui/CartPage/Total';
import Entry from '@/app/ui/CartPage/Entry';
import PageTitle from '@/app/ui/PageTitle';
import Success from '@/app/ui/CartPage/Success/Success';
import LoadingCartItem from '@/app/ui/CartPage/LoadingCartItem';
import ModalPayment from '@/app/ui/CartPage/ModalPayment';
import { FormControlLabel, Box } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';

import { contactDataSchema } from '@/app/lib/schemas';
import { postPayment } from '@/app/lib/postPayment';
import { deleteAllCart } from '@/app/lib/deleteAllCart';
import { addCartProduct } from '@/app/lib/addCartProduct';
import { putUser } from '@/app/lib/putUser';
import { makeAnOrder } from '@/app/lib/makeAnOrder';
import { getUserObj } from '@/app/lib/getUserObj';
import { getCart } from '@/app/lib/getCart';
import { createObjForPostPayment } from '@/app/lib/createObjForPostPayment';
import { border } from '@mui/system';

const CartPage = () => {
  const dispatch = useDispatch();
  const { isAuthorized, getUser } = useAuth();
  const authorized = isAuthorized();
  const user = authorized ? getUser() : null;
  const token = authorized ? localStorage.getItem('token') : null;

  const userCartProducts = useSelector(
    (state) => state.userCart.userCartProducts,
  );
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const userInfo = useSelector((state) => state.user.userInfo);
  const selectedDelivery = useSelector(
    (state) => state.delivery.selectedDelivery,
  );
  const selectedPayment = useSelector((state) => state.payment.selectedPayment);
  const loading = useSelector((state) => state.loading.loading);
  const dataForPaymentModal = useSelector(
    (state) => state.dataForPaymentModal.dataForPaymentModal,
  );
  const dataForOrder = useSelector((state) => state.dataForOrder.dataForOrder);

  const [success, setSuccess] = useState(false);

  const [loadingPostPayment, setLoadingPostPayment] = useState(false);

  const [activeObjForPostPayment, setActiveObjForPostPayment] = useState('');

  const [inactively, setInactively] = useState(true);

  const [errors, setErrors] = useState(true);

  const initialValues = {
    firstname: userInfo.firstname,
    surname: userInfo.surname,
    phone: userInfo.phone,
    email: userInfo.email,
    delivery: selectedDelivery,
    payment: selectedPayment,
    comment: dataForOrder.comment,
    doNotCall: dataForOrder.doNotCall,
    termsAgreement: false,
  };

  const objForPostPayment = createObjForPostPayment(userCartProducts, user);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = () => {
    putUser(
      userInfo.firstname,
      userInfo.surname,
      userInfo.email,
      userInfo.phone,
      user,
    );

    const products = transformObjectsArray(userCartProducts);

    if (initialValues.payment == 'Накладений платіж Нова Пошта') {
      if (
        initialValues.delivery == 'До відділення Нової Пошти' ||
        initialValues.delivery == 'До поштомату Нової Пошти'
      ) {
        const cityRefAndRef = findCityRefAndRefByDescription(
          dataForOrder.department,
          dataForOrder.filteredDepartments,
        );
        makeAnOrder(
          token,
          userInfo.firstname,
          userInfo.surname,
          userInfo.phone,
          userInfo.email,
          initialValues.delivery,
          initialValues.payment,
          dataForOrder.settlement.Present,
          dataForOrder.department,
          dataForOrder.settlement.Ref,
          dataForOrder.street.Present,
          dataForOrder.house,
          dataForOrder.flat,
          cityRefAndRef,
          products,
          dataForOrder.comment,
          dataForOrder.doNotCall,
        );
        dispatch(removeCartProducts());
        deleteAllCart(token);
        setSuccess(true);
        dispatch(resetDataForOrder());
      }
      if (initialValues.delivery == "Кур'єр на вашу адресу") {
        const cityRefAndRef = false;
        makeAnOrder(
          token,
          userInfo.firstname,
          userInfo.surname,
          userInfo.phone,
          userInfo.email,
          initialValues.delivery,
          initialValues.payment,
          dataForOrder.settlement.Present,
          dataForOrder.department,
          dataForOrder.settlement.Ref,
          dataForOrder.street.Present,
          dataForOrder.house,
          dataForOrder.flat,
          cityRefAndRef,
          products,
          dataForOrder.comment,
          dataForOrder.doNotCall,
        );
        dispatch(removeCartProducts());
        deleteAllCart(token);
        setSuccess(true);
        dispatch(resetDataForOrder());
      }
    }
    if (initialValues.payment == 'Visa/Mastercard • Google Pay • Apple Pay') {
      if (
        initialValues.delivery == 'До відділення Нової Пошти' ||
        initialValues.delivery == 'До поштомату Нової Пошти'
      ) {
        const cityRefAndRef = findCityRefAndRefByDescription(
          dataForOrder.department,
          dataForOrder.filteredDepartments,
        );
        dispatch(
          setDataForOrder({
            valueName: 'cityRefAndRef',
            value: cityRefAndRef,
          }),
        );
        dispatch(setDataForOrder({ valueName: 'products', value: products }));
        setLoadingPostPayment(true);
        setActiveObjForPostPayment(objForPostPayment);
        postPayment(token, objForPostPayment, dispatch, setDataForPaymentModal);
      }
      if (initialValues.delivery == "Кур'єр на вашу адресу") {
        const cityRefAndRef = false;
        dispatch(
          setDataForOrder({
            valueName: 'cityRefAndRef',
            value: cityRefAndRef,
          }),
        );
        dispatch(setDataForOrder({ valueName: 'products', value: products }));
        setLoadingPostPayment(true);
        setActiveObjForPostPayment(objForPostPayment);
        postPayment(token, objForPostPayment, dispatch, setDataForPaymentModal);
      }
    }
    handleScrollToTop();
  };

  function findCityRefAndRefByDescription(description, objectsArray) {
    for (const obj of objectsArray) {
      if (obj.Description === description) {
        return { CityRef: obj.CityRef, Ref: obj.Ref };
      }
    }
    return null;
  }

  function transformObjectsArray(objectsArray) {
    return objectsArray.map((obj) => ({
      id: obj.product.crmId,
      name: obj.product.name,
      costPerItem: obj.product.price,
      amount: obj.quantity,
      description: '',
      discount: '',
      sku: obj.product.vendorCode,
    }));
  }

  useEffect(() => {
    if (!authorized) {
      if (userCartProducts.length !== 0) {
        dispatch(removeUserCartProducts());
      }
    }
  }, [authorized]);

  useEffect(() => {
    if (success == true) {
      getCart(token, setUserCartProducts, dispatch);
    }
  }, [success]);

  useEffect(() => {
    if (dataForPaymentModal.value !== '') {
      setLoadingPostPayment(false);
      dispatch(
        setDataForOrder({ valueName: 'isOpenModalPayment', value: true }),
      );
    } else {
      dispatch(
        setDataForOrder({ valueName: 'isOpenModalPayment', value: false }),
      );
    }
  }, [dataForPaymentModal]);

  useEffect(() => {
    dispatch(
      setDataForPaymentModal({
        valueName: 'dataForPaymentModal',
        value: '',
      }),
    );
  }, []);

  return (
    <>
      {loadingPostPayment && (
        <WrapperForLoading>
          <CircularProgress />
        </WrapperForLoading>
      )}
      <Content>
        <BreadCrumbs />
        {cartProducts.length === 0 &&
        userCartProducts.length === 0 &&
        success == false &&
        loading == false ? (
          <EmptyCart />
        ) : cartProducts.length === 0 &&
          userCartProducts.length === 0 &&
          success == true ? (
          <Success />
        ) : (
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={contactDataSchema}
            validateOnMount
            enableReinitialize
          >
            {({ dirty, isValid }) => (
              <Form>
                <StyledCartLayout>
                  <StyledOrderWrapper>
                    <WrapperCartProducts>
                      <Box sx={{ marginBottom: '20px' }}>
                        <PageTitle>Кошик</PageTitle>
                      </Box>
                      {loading && <LoadingCartItem />}
                      {/* {!authorized && <Entry />} */}
                      {loading == false &&
                        userCartProducts.map((product, index) => (
                          <CartItem
                            product={product}
                            key={index}
                            type="cart"
                            userCartProducts={true}
                          />
                        ))}
                      {loading == false &&
                        cartProducts.map((product) => (
                          <CartItem
                            product={product}
                            key={product._id}
                            type="cart"
                          />
                        ))}
                    </WrapperCartProducts>
                    <Total
                      dirty={dirty}
                      isValid={isValid}
                      cartProducts={
                        authorized ? userCartProducts : cartProducts
                      }
                      dataForOrder={dataForOrder}
                      authorized={authorized}
                    />
                  </StyledOrderWrapper>
                  {/* {authorized ? ( */}
                  <Wrapper>
                    <UserInfo
                      setErrors={setErrors}
                      cart={true}
                      isValid={isValid}
                      setInactively={setInactively}
                    />
                    <Box sx={{ display: inactively ? 'none' : 'block' }}>
                      <Delivery setDataForOrder={setDataForOrder} />
                      <Payment />
                      <Comment
                        dataForOrder={dataForOrder}
                        setDataForOrder={setDataForOrder}
                      />
                      {/* <FormControlLabel
                        sx={{ margin: '24px 0 0 0' }}
                        control={<Checkbox sx={{ paddingLeft: 0 }} />}
                        name={'doNotCall'}
                        label={'Не дзвонити для підтвердження замовлення'}
                        onChange={() =>
                          dispatch(
                            setDataForOrder({
                              valueName: 'doNotCall',
                              value: !dataForOrder.doNotCall,
                            }),
                          )
                        }
                      /> */}
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '0 0 24px 3px',
                        '@media (min-width: 1025px)': {
                          display: 'none',
                        },
                      }}
                    >
                      <FormControlLabel
                        sx={{
                          marginBottom: '14px',
                        }}
                        control={
                          <Field
                            type="checkbox"
                            name="termsAgreement"
                            as={Checkbox}
                          />
                        }
                        label="З умовами ознайомлений та погоджуюсь*"
                      />
                      <StyledTermsTitle>
                        Підтверджуючи замовлення, я приймаю умови:{' '}
                      </StyledTermsTitle>
                      <StyledList>
                        <StyledListItem>
                          <Link href="/privacy-policy">
                            • політики конфіденційності
                          </Link>
                        </StyledListItem>
                      </StyledList>
                    </Box>
                  </Wrapper>
                  {/* ) : null} */}
                  <StyledCheckoutButton
                    sx={{
                      '@media (min-width: 1025px)': {
                        display: 'none',
                      },
                    }}
                    type="submit"
                    variant="contained"
                    disabled={
                      !dirty || !isValid
                      // ||
                      //   dataForOrder.settlement == '' ||
                      //   dataForOrder.department == ''
                    }
                  >
                    Замовлення підтверджую
                  </StyledCheckoutButton>
                </StyledCartLayout>
              </Form>
            )}
          </Formik>
        )}
      </Content>
      <ModalPayment
        dataForOrder={dataForOrder}
        setDataForOrder={setDataForOrder}
        objForPostPayment={activeObjForPostPayment}
        firstname={userInfo.firstname}
        surname={userInfo.surname}
        userCartProducts={userCartProducts}
        dataForPaymentModal={dataForPaymentModal}
      />
    </>
  );
};

export default CartPage;
