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
  const userInfo = useSelector((state) => state.user.userInfo);

  const initialValues = {
    firstname: userInfo.firstname,
    surname: userInfo.surname,
    phone: userInfo.phone,
    email: userInfo.email,
  };

  const handleSubmit = () => {
    putUser(
      userInfo.firstname,
      userInfo.surname,
      userInfo.email,
      userInfo.phone,
      user,
    );
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
              <CartContactInfo />
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
