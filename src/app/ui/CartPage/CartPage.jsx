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

const CartPage = () => {
  const { isAuthorized, getUser } = useAuth();
  const user = getUser();
  const authorized = isAuthorized();

  const initialValues = {
    lastname: '',
    firstname: '',
    phone: '',
    email: '',
    delivery: '',
    payment: '',
    comment: '',
    anotherPerson: false,
    doNotCall: false,
    termsAgreement: false,
    termsAgreement: false,
  };

  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const [products, setProducts] = useState(cartProducts);

  const handleRemoveProduct = (code) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.code !== code),
    );
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Content>
      <BreadCrumbs />
      {products.length === 0 ? (
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
                  <CartPageTitle>Кошик</CartPageTitle>
                  {authorized ? <Entry /> : <Entry />}
                  {products.map((product) => (
                    <CartItem product={product} key={product._id} />
                  ))}
                  {authorized ? (
                    <>
                      <UserInfo />
                      <Delivery />
                      <Payment />
                      <Comment />
                    </>
                  ) : null}
                </StyledOrderWrapper>
                <Total dirty={dirty} isValid={isValid} />
              </StyledCartLayout>
            </Form>
          )}
        </Formik>
      )}
    </Content>
  );
};

export default CartPage;
