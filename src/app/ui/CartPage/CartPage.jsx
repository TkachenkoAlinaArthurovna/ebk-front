'use client';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { Form, Formik, Field } from 'formik';

import { useAuth } from '@/redux/contexts/AuthContext';
import { removeCartProducts } from '@/redux/slices/CartSlice';
import { removeUserCartProducts } from '@/redux/slices/UserCartSlice';
import { setUserCartProducts } from '@/redux/slices/UserCartSlice';

import BreadCrumbs from '@/app/ui/BreadCrumbs/BreadCrumbs';
import CartItem from '@/app/ui/CartPage/CartItem/CartItem';
import Content from '@/app/ui/Content';
import {
  StyledCartLayout,
  StyledOrderWrapper,
  WrapperCartProducts,
  Wrapper,
} from '@/app/ui/CartPage/CartPageStyles';
import {
  StyledCheckoutButton,
  StyledList,
  StyledListItem,
  StyledTermsTitle,
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

import { contactDataSchema } from '@/app/lib/schemas';
import { postPayment } from '@/app/lib/postPayment';
import { deleteAllCart } from '@/app/lib/deleteAllCart';
import { addCartProduct } from '@/app/lib/addCartProduct';
import { putUser } from '@/app/lib/putUser';
import { makeAnOrder } from '@/app/lib/makeAnOrder';
import { getUserObj } from '@/app/lib/getUserObj';
import { getCart } from '@/app/lib/getCart';
import { sumUserPrices } from '@/app/lib/getTotalForCart';
import { dollar } from '@/app/lib/dollar';

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
  const firstname = useSelector((state) => state.user.firstname);
  const surname = useSelector((state) => state.user.surname);
  const phone = useSelector((state) => state.user.phone);
  const email = useSelector((state) => state.user.email);
  const selectedDelivery = useSelector(
    (state) => state.delivery.selectedDelivery,
  );
  const selectedPayment = useSelector((state) => state.payment.selectedPayment);
  const loading = useSelector((state) => state.loading.loading);

  const [comment, setComment] = useState('');
  const [doNotCall, setDoNotCall] = useState(false);
  const [settlement, setSettlement] = useState('');
  const [department, setDepartment] = useState('');
  const [filteredDepartments, setFilteredDepartments] = useState('');
  const [success, setSuccess] = useState(false);
  const [isOpenModalPayment, setIsOpenModalPayment] = useState(false);

  const initialValues = {
    firstname: firstname,
    surname: surname,
    phone: phone,
    email: email,
    delivery: selectedDelivery,
    payment: selectedPayment,
    comment: comment,
    doNotCall: doNotCall,
    termsAgreement: false,
  };

  const createObjForPostPayment = () => {
    const date = Date.now();
    const amountProducts = sumUserPrices(userCartProducts).replace(/\s/g, '');
    const arrProductName = userCartProducts.map(
      (cartProduct) => cartProduct.product.crmId,
    );
    const arrProductCount = userCartProducts.map(
      (cartProduct) => cartProduct.quantity,
    );
    const productPrice = userCartProducts.map((cartProduct) =>
      Math.ceil(cartProduct.product.price * dollar),
    );

    return {
      orderDate: date,
      amount: amountProducts,
      currency: 'UAH',
      productName: arrProductName,
      productCount: arrProductCount,
      productPrice: productPrice,
      accountId: user ? user.id : null,
    };
  };

  const objForPostPayment = createObjForPostPayment();

  const handleSubmit = () => {
    putUser(firstname, surname, email, phone, user);
    const cityRefAndRef = findCityRefAndRefByDescription(
      department,
      filteredDepartments,
    );
    const products = transformObjectsArray(userCartProducts);

    // if (initialValues.payment == 'Накладений платіж Нова Пошта') {
    //   makeAnOrder(
    //     token,
    //     firstname,
    //     surname,
    //     phone,
    //     email,
    //     initialValues.delivery,
    //     initialValues.payment,
    //     settlement.Present,
    //     department,
    //     cityRefAndRef,
    //     products,
    //     comment,
    //     doNotCall,
    //   );
    //   dispatch(removeCartProducts());
    //   deleteAllCart(token);
    //   setSuccess(true);
    // }
    // if (initialValues.payment == 'Visa/Mastercard • Google Pay • Apple Pay') {
    //   postPayment(token, objForPostPayment);
    //   setIsOpenModalPayment(true);
    // }
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

  return (
    <>
      <Content>
        <BreadCrumbs />
        {cartProducts.length === 0 &&
        userCartProducts.length === 0 &&
        success == false &&
        loading == false ? (
          <EmptyCart />
        ) : success == true ? (
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
                      {!authorized && <Entry />}
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
                      settlement={settlement}
                      department={department}
                      authorized={authorized}
                    />
                  </StyledOrderWrapper>
                  {authorized ? (
                    <Wrapper>
                      <UserInfo />
                      <Delivery
                        setSettlement={setSettlement}
                        setDepartment={setDepartment}
                        setFilteredDepartments={setFilteredDepartments}
                      />
                      <Payment />
                      <Comment comment={comment} setComment={setComment} />
                      <FormControlLabel
                        sx={{ margin: '24px 0 0 0' }}
                        control={<Checkbox sx={{ paddingLeft: 0 }} />}
                        name={'doNotCall'}
                        label={'Не дзвонити для підтвердження замовлення'}
                        onChange={() => setDoNotCall(!doNotCall)}
                      />
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
                          sx={{ marginBottom: '14px' }}
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
                  ) : null}
                  <StyledCheckoutButton
                    sx={{
                      '@media (min-width: 1025px)': {
                        display: 'none',
                      },
                    }}
                    type="submit"
                    variant="contained"
                    disabled={
                      !dirty || !isValid || settlement == '' || department == ''
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
        isOpenModalPayment={isOpenModalPayment}
        setIsOpenModalPayment={setIsOpenModalPayment}
        objForPostPayment={objForPostPayment}
        firstname={firstname}
        surname={surname}
        userCartProducts={userCartProducts}
      />
    </>
  );
};

export default CartPage;
