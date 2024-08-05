'use client';

import { Box } from '@mui/material';
import { Form, Formik } from 'formik';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Field, ErrorMessage } from 'formik';
import { postLogin } from '@/app/lib/postLogin';
import { postRegistration } from '@/app/lib/postRegistration';
import { useAuth } from '@/redux/contexts/AuthContext';

import { useState, useEffect } from 'react';

import {
  ButtonBox,
  StyledButton,
} from '@/app/ui/Cabinet/UserInfo/UserInfoStyles';
import React from 'react';
import { fontSize } from '@mui/system';

const AuthForma = ({ registration, handleCloseAuthModal }) => {
  const { isAuthorized, getUser } = useAuth();
  const authorized = isAuthorized();
  const { login } = useAuth();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (authorized) {
      handleCloseAuthModal();
    }
  }, [authorized]);
  return (
    <Box sx={{ marginTop: '50px' }}>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Поле не повинно бути пустим';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Не вірно введений email.';
          }

          if (!values.password) {
            errors.password = 'Поле не повинно бути пустим';
          } else if (
            values.password.length < 4 ||
            values.password.length > 16
          ) {
            errors.password = 'Пароль повинен містити від 4 до 16 символів';
          }

          if (registration) {
            if (!values.confirmPassword) {
              errors.confirmPassword = 'Поле не повинно бути пустим';
            } else if (values.confirmPassword !== values.password) {
              errors.confirmPassword = 'Паролі повинні співпадати';
            }
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          registration
            ? postRegistration(login, values.email, values.password)
            : postLogin(login, values.email, values.password, setError);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <Grid item md={6} xs={12} sx={{ height: '100px' }}>
              <Field
                as={TextField}
                label="Ел. пошта"
                placeholder="Введіть свою ел. пошту"
                fullWidth
                InputLabelProps={{ shrink: true }}
                sx={{ marginBottom: '6px' }}
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <ErrorMessage
                name={'email'}
                component={'div'}
                style={{ color: '#dc362e', fontSize: '12px' }}
              />
            </Grid>
            <Grid item md={6} xs={12} sx={{ height: '100px' }}>
              <Field
                as={TextField}
                label="Пароль"
                placeholder="Введіть пароль"
                fullWidth
                InputLabelProps={{ shrink: true }}
                sx={{ marginBottom: '6px' }}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <ErrorMessage
                name={'password'}
                component={'div'}
                style={{ color: '#dc362e', fontSize: '12px' }}
              />
            </Grid>
            {registration && (
              <Grid item md={6} xs={12} sx={{ height: '100px' }}>
                <Field
                  as={TextField}
                  label="Підтвердіть пароль"
                  placeholder="Введіть пароль ще раз"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  sx={{ marginBottom: '6px' }}
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                />
                <ErrorMessage
                  name={'confirmPassword'}
                  component={'div'}
                  style={{ color: '#dc362e', fontSize: '12px' }}
                />
              </Grid>
            )}
            {error ? (
              <Box
                sx={{
                  margin: '0 0 20px 0',
                  color: 'rgb(220, 54, 46)',
                  fontSize: '12px',
                }}
              >
                Електронну пошту або пароль було введено невірно.
              </Box>
            ) : null}
            <ButtonBox>
              <StyledButton
                type="submit"
                // disabled={isSubmitting}
                sx={{ width: '100%', margin: '0' }}
              >
                {registration ? 'Реєстрація' : 'Вхід'}
              </StyledButton>
            </ButtonBox>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AuthForma;
