'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { useAuth } from '@/redux/contexts/AuthContext';
import CartContactInfo from '@/app/ui/CartPage/CartContactInfo/CartContactInfo';
import PageTitle from '@/app/ui/PageTitle';
import { Form, Formik } from 'formik';
import { contactDataSchema } from '@/app/lib/schemas';
import {
  Wrapper,
  ButtonBox,
  StyledButton,
  FormContainer,
} from '@/app/ui/Cabinet/UserInfo/UserInfoStyles';
import { putUser } from '@/app/lib/putUser';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const { isAuthorized, getUser } = useAuth();
  const authorized = isAuthorized();
  const user = authorized ? getUser() : null;
  const token = authorized ? localStorage.getItem('token') : null;
  const firstname = useSelector((state) => state.user.firstname);
  const surname = useSelector((state) => state.user.surname);
  const phone = useSelector((state) => state.user.phone);
  const email = useSelector((state) => state.user.email);

  const initialValues = {
    firstname: firstname,
    surname: surname,
    phone: phone,
    email: email,
  };

  const handleSubmit = () => {
    putUser(firstname, surname, email, phone, user);
  };

  return (
    <Wrapper>
      <PageTitle>Особиста інформація</PageTitle>
      <FormContainer>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={contactDataSchema}
          validateOnMount
          enableReinitialize
        >
          {({}) => (
            <Form>
              <CartContactInfo
                firstname={firstname}
                surname={surname}
                phone={phone}
                email={email}
              />
              <ButtonBox>
                <StyledButton type="submit" onClick={handleSubmit}>
                  Зберегти зміни
                </StyledButton>
              </ButtonBox>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </Wrapper>
  );
};

export default UserInfo;
