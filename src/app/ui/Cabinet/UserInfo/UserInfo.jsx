'use client';

import React from 'react';
import { styled, Button, Box } from '@mui/material';
import CartContactInfo from '@/app/ui/CartPage/CartContactInfo/CartContactInfo';
import PageTitle from '@/app/ui/PageTitle';
import { Form, Formik } from 'formik';
import { contactDataSchema } from '@/lib/schemas';

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: 248px;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
  padding: 12px 24px;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
  text-transform: none;
  color: #ffff;
  &:hover {
    background-color: #42ada7;
  }
`;

const FormContainer = styled(Box)`
  margin-top: 32px;
`;

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
          validationSchema={contactDataSchema}
          validateOnMount
          enableReinitialize
        >
          {() => (
            <Form>
              <CartContactInfo />
              <StyledButton type="submit">Зберегти зміни</StyledButton>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </Wrapper>
  );
};

export default UserInfo;
