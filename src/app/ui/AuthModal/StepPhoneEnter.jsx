import TextField from '@mui/material/TextField';
import { StyledAuthButton } from '@/app/ui/AuthModal/AuthorizationStyles';
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { phoneSchema } from '@/app/lib/schemas';

const StepPhoneEnter = ({ setPhone, phone, setStep }) => {
  const defaultHelperText =
    'Необхідно вірно вказати код країни +380. Приклад: +380 36 982 5874';
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [helperText, setHelperText] = useState(defaultHelperText);
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsFieldDisabled] = useState(false);

  const handlePhoneChange = (e, setFieldValue, setFieldTouched) => {
    phone = e.target.value;
    setFieldValue('phone', phone); // Formik обновит значение поля
    setFieldTouched('phone', true, false); // Отметить поле как "тронутое" для валидации
    setHelperText(defaultHelperText);
    setIsError(false);
    if (phone.length >= 13) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  function handleNextStep(tempPhone) {
    setIsFieldDisabled(true);
    setIsButtonDisabled(true);
    const phone = tempPhone.replace(/\D/g, '');
    const params = {
      phone: phone,
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    };

    fetch(`https://stage.eco-bike.com.ua/api/auth/sign-in`, options)
      .then((response) => {
        if (response.status !== 200) {
          setIsError(true);
          setHelperText('Невірний номер телефону');
          return;
        }
        setStep(2);
      })
      .catch(() => {
        setIsError(true);
        setHelperText('Невірний номер телефону');
      })
      .finally(() => {
        setIsFieldDisabled(false);
        setIsButtonDisabled(false);
      });
  }

  const onSubmit = (value) => {
    setPhone(value.phone);
    handleNextStep(value.phone);
  };

  return (
    <>
      <Formik
        initialValues={{ phone: phone }}
        validationSchema={phoneSchema}
        onSubmit={onSubmit}
      >
        {({ isValid, touched, setFieldValue, setFieldTouched }) => (
          <Form>
            <Field
              as={TextField}
              sx={{ mb: 2 }}
              label="Номер телефону"
              id="phone"
              name="phone"
              placeholder="+380"
              helperText={helperText}
              error={isError}
              disabled={isDisabled}
              onChange={(e) =>
                handlePhoneChange(e, setFieldValue, setFieldTouched)
              }
              fullWidth
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="error"
              style={{
                color: '#dc362e',
                marginBottom: '24px',
                marginLeft: '14px',
                fontSize: '0.75rem',
              }}
            />
            <StyledAuthButton
              type="submit"
              variant="contained"
              sx={{ p: 2 }}
              fullWidth
              disabled={!isValid || isButtonDisabled}
            >
              Увійти
            </StyledAuthButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default StepPhoneEnter;
