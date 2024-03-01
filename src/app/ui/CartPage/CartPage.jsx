'use client';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
import { Form, Formik } from 'formik';
import { contactDataSchema } from '@/app/lib/schemas';
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
  const authorized = isAuthorized();
  console.log(authorized);

  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const initialValues = {
    firstname: firstname,
    surname: surname,
    phone: phone,
    email: email,
    delivery: '',
    payment: '',
    comment: '',
    doNotCall: false,
    termsAgreement: false,
  };

  const getUserObj = async (token, user) => {
    try {
      const url = `https://stage.eco-bike.com.ua/api/users/${user.id}`;
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (res.ok) {
        const data = await res.json();
        if (data) {
          console.log(data);
          data.name ? setFirstname(data.name) : '';
          data.surname ? setSurname(data.name) : '';
          data.phone ? setPhone('+' + data.phone) : '';
          data.email ? setEmail(data.email) : '';
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (authorized) {
      const token = localStorage.getItem('token');
      const user = getUser();
      console.log(user);
      console.log(token);
      getUserObj(token, user);
    }
  }, [authorized]);

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
                    <UserInfo
                      firstname={firstname}
                      setFirstname={setFirstname}
                      surname={surname}
                      setSurname={setSurname}
                      phone={phone}
                      email={email}
                      setEmail={setEmail}
                    />
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
