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
import { getUserObj } from '@/app/lib/getUserObj';
import { putUser } from '@/app/lib/putUser';

const UserInfo = () => {
  const { isAuthorized, getUser } = useAuth();
  const authorized = isAuthorized();
  const user = authorized ? getUser() : null;
  const token = authorized ? localStorage.getItem('token') : null;
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const initialValues = {
    firstname: firstname,
    surname: surname,
    phone: phone,
    email: email,
  };

  useEffect(() => {
    if (authorized) {
      getUserObj(token, user, setFirstname, setSurname, setPhone, setEmail);
    }
  }, [authorized]);

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
                setFirstname={setFirstname}
                surname={surname}
                setSurname={setSurname}
                phone={phone}
                email={email}
                setEmail={setEmail}
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
