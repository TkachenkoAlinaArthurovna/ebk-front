'use client';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCartProducts } from '@/redux/slices/CartSlice';
import Link from 'next/link';
import { useAuth } from '@/redux/contexts/AuthContext';
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
import { Form, Formik, Field } from 'formik';
import { contactDataSchema } from '@/app/lib/schemas';
import EmptyCart from './EmptyCart/EmptyCart';
import Delivery from '@/app/ui/CartPage/Delivery';
import UserInfo from '@/app/ui/CartPage/UserInfo';
import Payment from '@/app/ui/CartPage/Payment';
import Comment from '@/app/ui/CartPage/Comment';
import Total from '@/app/ui/CartPage/Total';
import Entry from '@/app/ui/CartPage/Entry';
import { FormControlLabel, Box } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import PageTitle from '@/app/ui/PageTitle';
import { makeAnOrder } from '@/app/lib/makeAnOrder';
import { getUserObj } from '@/app/lib/getUserObj';
import { putUser } from '@/app/lib/putUser';
import Success from '@/app/ui/CartPage/Success/Success';
import { getCart } from '@/app/lib/getCart';
import LoadingCartItem from '@/app/ui/CartPage/LoadingCartItem';
import { setUserCartProducts } from '@/redux/slices/UserCartSlice';
import { deleteAllCart } from '@/app/lib/deleteAllCart';
import { addCartProduct } from '@/app/lib/addCartProduct';
import { toggleCart } from '@/redux/slices/CartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const { isAuthorized, getUser } = useAuth();
  const authorized = isAuthorized();
  const user = authorized ? getUser() : null;
  const token = authorized ? localStorage.getItem('token') : null;
  const firstname = useSelector((state) => state.user.firstname);
  const surname = useSelector((state) => state.user.surname);
  const phone = useSelector((state) => state.user.phone);
  const email = useSelector((state) => state.user.email);
  const [comment, setComment] = useState('');
  const [doNotCall, setDoNotCall] = useState(false);
  const selectedDelivery = useSelector(
    (state) => state.delivery.selectedDelivery,
  );
  const selectedPayment = useSelector((state) => state.payment.selectedPayment);
  const [settlement, setSettlement] = useState('');
  const [department, setDepartment] = useState('');
  const [filteredDepartments, setFilteredDepartments] = useState('');
  const userCartProducts = useSelector(
    (state) => state.userCart.userCartProducts,
  );
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const [loading, setLoading] = useState(false);
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
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    putUser(firstname, surname, email, phone, user);
    const cityRefAndRef = findCityRefAndRefByDescription(
      department,
      filteredDepartments,
    );
    const products = transformObjectsArray(userCartProducts);
    makeAnOrder(
      token,
      firstname,
      surname,
      phone,
      email,
      initialValues.delivery,
      initialValues.payment,
      settlement.Present,
      department,
      cityRefAndRef,
      products,
      comment,
      doNotCall,
    );
    dispatch(removeCartProducts());
    setSuccess(true);
    deleteAllCart(token);
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

  // useEffect(() => {
  //   if (authorized && token) {
  //     if (cartProducts.length !== 0) {
  //       setLoading(true);
  //       cartProducts.map((product) => {
  //         addCartProduct(token, product.crmId);
  //         dispatch(toggleCart({ currentCard: product, action: 'remove' }));
  //       });
  //     }
  //     setLoading(false);
  //   }
  // }, [authorized]);

  useEffect(() => {
    if (authorized && token) {
      if (cartProducts.length == 0) {
        getCart(token, setUserCartProducts, dispatch, setLoading);
      }
    }
  }, [authorized, cartProducts]);

  return (
    <Content>
      <BreadCrumbs />
      {cartProducts.length === 0 &&
      success == false &&
      userCartProducts.length === 0 &&
      loading == false ? (
        <EmptyCart />
      ) : cartProducts.length === 0 &&
        success == true &&
        userCartProducts.length === 0 ? (
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
                    {authorized
                      ? userCartProducts.map((product, index) => (
                          <CartItem
                            product={product}
                            key={index}
                            type="cart"
                            userCartProducts={true}
                          />
                        ))
                      : cartProducts.map((product) => (
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
                    cartProducts={authorized ? userCartProducts : cartProducts}
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
  );
};

export default CartPage;
