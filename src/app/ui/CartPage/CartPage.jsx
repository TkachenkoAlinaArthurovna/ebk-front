'use client';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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

const CartPage = () => {
  const { isAuthorized, getUser } = useAuth();
  const authorized = isAuthorized();
  const user = authorized ? getUser() : null;
  const token = authorized ? localStorage.getItem('token') : null;
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const selectedDelivery = useSelector(
    (state) => state.delivery.selectedDelivery,
  );
  const selectedPayment = useSelector((state) => state.payment.selectedPayment);
  const [settlement, setSettlement] = useState('');
  const [department, setDepartment] = useState('');
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const initialValues = {
    firstname: firstname,
    surname: surname,
    phone: phone,
    email: email,
    delivery: selectedDelivery,
    payment: selectedPayment,
    comment: '',
    doNotCall: false,
    termsAgreement: false,
  };

  useEffect(() => {
    if (authorized) {
      getUserObj(token, user, setFirstname, setSurname, setPhone, setEmail);
    }
  }, [authorized]);

  const handleSubmit = () => {
    putUser(firstname, surname, email, phone, user);
    console.log('order');
    makeAnOrder();
    // firstname,
    // surname,
    // phone,
    // email,
    // initialValues.delivery,
    // initialValues.payment,
    // settlement.Present,
    // department,
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
                    settlement={settlement}
                    department={department}
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
                    <Delivery
                      setSettlement={setSettlement}
                      setDepartment={setDepartment}
                    />
                    <Payment />
                    <Comment />
                    <FormControlLabel
                      sx={{ margin: '24px 0 0 0' }}
                      control={<Checkbox sx={{ paddingLeft: 0 }} />}
                      name={'doNotCall'}
                      label={'Не дзвонити для підтвердження замовлення'}
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
