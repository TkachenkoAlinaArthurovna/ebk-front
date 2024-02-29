'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAuth } from '@/redux/contexts/AuthContext';
import BreadCrumbs from '@/app/ui/BreadCrumbs/BreadCrumbs';
import CartItem from '@/app/ui/CartPage/CartItem/CartItem';
import Content from '@/app/ui/Content';
import {
  CartPageTitle,
  StyledCartLayout,
  StyledOrderWrapper,
  WrapperCartProducts,
  Wrapper,
} from '@/app/ui/CartPage/CartPageStyles';
import { Form, Formik } from 'formik';
import { contactDataSchema } from '@/lib/schemas';
import EmptyCart from './EmptyCart/EmptyCart';
import Delivery from '@/app/ui/CartPage/Delivery';
import UserInfo from '@/app/ui/CartPage/UserInfo';
import Payment from '@/app/ui/CartPage/Payment';
import Comment from '@/app/ui/CartPage/Comment';
import Total from '@/app/ui/CartPage/Total';
import Entry from '@/app/ui/CartPage/Entry';
import { Box } from '@mui/material';
import PageTitle from '@/app/ui/PageTitle';

const CartPage = () => {
  const { isAuthorized, getUser } = useAuth();
  const user = getUser();
  const authorized = isAuthorized();

  const initialValues = {
    firstname: '',
    surname: '',
    phone: '',
    email: '',
    delivery: '',
    payment: '',
    comment: '',
    doNotCall: false,
    termsAgreement: false,
  };

  const cartProducts = useSelector((state) => state.cart.cartProducts);

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Content>
      <BreadCrumbs />
      {cartProducts.length === 0 ? (
        <EmptyCart />
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
                    {authorized ? null : <Entry />}
                    {cartProducts.map((product) => (
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
                    cartProducts={cartProducts}
                  />
                </StyledOrderWrapper>
                {authorized ? (
                  <Wrapper>
                    <UserInfo />
                    <Delivery />
                    <Payment />
                    <Comment />
                  </Wrapper>
                ) : null}
              </StyledCartLayout>
            </Form>
          )}
        </Formik>
      )}
    </Content>
  );
};

export default CartPage;
