'use client';

import React from 'react';
import CartContactInfo from '@/app/ui/CartPage/CartContactInfo/CartContactInfo';
import PageTitle from '@/app/ui/PageTitle';
import { Form, Formik } from 'formik';
// import { contactDataSchema } from '@/lib/schemas';
import {
  Wrapper,
  ButtonBox,
  StyledButton,
  FormContainer,
} from '@/app/ui/Cabinet/UserInfo/UserInfoStyles';

const UserInfo = () => {
  const initialValues = {
    lastname: '',
    firstname: '',
    phone: '',
    email: '',
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Wrapper>
      <PageTitle>Особиста інформація</PageTitle>
      <FormContainer>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          // validationSchema={contactDataSchema}
          validateOnMount
          enableReinitialize
        >
          {() => (
            <Form>
              <CartContactInfo />
              <ButtonBox>
                <StyledButton type="submit">Зберегти зміни</StyledButton>
              </ButtonBox>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </Wrapper>
  );
};

export default UserInfo;
