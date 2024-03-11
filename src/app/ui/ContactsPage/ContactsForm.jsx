'use client';

import React from 'react';
import { Grid, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { StyledButton } from '@/app/ui/ContactsPage/ContactsStyles';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { contactsPageSchema } from '@/app/lib/schemas';
import { sendMail } from '@/app/lib/sendMail';

const ContactsForm = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const onSubmit = (value, { resetForm }) => {
    sendMail(value.name, value.email, value.message);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactsPageSchema}
      onSubmit={onSubmit}
    >
      {({ isValid, touched }) => (
        <Form>
          <Grid>
            <Box sx={{ height: '90px' }}>
              <Field
                as={TextField}
                sx={{ marginBottom: '6px' }}
                label="Ім'я"
                id="name"
                name="name"
                placeholder="Вкажіть ім'я"
                fullWidth
              />
              <ErrorMessage
                name="name"
                component="div"
                className="error"
                style={{ color: '#dc362e' }}
              />
            </Box>
            <Box sx={{ height: '90px' }}>
              <Field
                as={TextField}
                sx={{ marginBottom: '6px' }}
                label="Email"
                id="email"
                name="email"
                placeholder="Вкажіть email"
                fullWidth
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error"
                style={{ color: '#dc362e' }}
              />
            </Box>
            <Box sx={{ height: '170px' }}>
              <Field
                as={TextField}
                sx={{ marginBottom: '6px' }}
                label="Повідомлення"
                id="message"
                name="message"
                multiline
                rows={4}
                placeholder="Ваше повідомлення"
                fullWidth
                spellCheck={false}
              />
              <ErrorMessage
                name="message"
                component="div"
                className="error"
                style={{ color: '#dc362e' }}
              />
            </Box>
            <StyledButton
              type="submit"
              variant="contained"
              fullWidth
              disabled={
                !isValid || !touched.name || !touched.email || !touched.message
              }
            >
              Відправити
            </StyledButton>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default ContactsForm;
