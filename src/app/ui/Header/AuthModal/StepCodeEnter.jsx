import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {
  StyledAuthButton,
  StyledBackButton,
  StyledTimer,
} from '@/app/ui/Header/AuthModal/AuthorizationStyles';
import React, { useState } from 'react';
import { useAuth } from '@/redux/contexts/AuthContext';

const StepCodeEnter = ({ phone, handleClose, setStep, setPhone, isStub }) => {
  const [code, setCode] = useState('');
  const [helperText, setHelperText] = useState(
    'Введіть код, який ми відправили на ваш номер',
  );
  const [isError, setIsError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [timer, setTimer] = useState(60);

  const { login } = useAuth();

  const handleCodeChange = (event) => {
    setCode(event.target.value);
    if (event.target.value.length >= 4) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleConfirmCode = () => {
    // send to server after sms taken
    // error mock

    if (isStub) {
      if (code !== phone.slice(-4)) {
        setIsError(true);
        setHelperText('Невірний код');
        return;
      }
      const tempToken =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZDdjNDA1ZDEzZTRjNjM1NjE3NmUzMiIsImlhdCI6MTcwODYzOTMyMn0.YlWSO1DKdzDJPNlLrNHh0xs0g8FJZ8J_hMP2lijMqK0';
      login(tempToken);
      handleClose();
      return;
    }

    phone = phone.replace(/\D/g, '');
    const params = {
      phone: phone,
      code: code,
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    };

    fetch(`https://stage.eco-bike.com.ua/api/auth/verify`, options)
      .then((response) => {
        console.log('response', response);
        if (response.status !== 202) {
          setIsError(true);
          return;
        }

        return response.json();
      })
      .then((data) => {
        login(data.token);
        handleClose();
      })
      .catch(() => {
        setIsError(true);
      });
  };

  setTimeout(() => {
    if (timer === 0) return;
    setTimer(timer - 1);
  }, 1000);

  const handleResendCode = () => {
    setTimer(60);

    if (isStub) {
      return;
    }

    phone = phone.replace(/\D/g, '');
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
        console.log('response', response);
        if (response.status !== 200) {
          setIsError(true);
          return;
        }
        setStep(2);
      })
      .catch(() => {
        setIsError(true);
      });
  };

  const handleEditPhone = () => {
    setPhone('+380');
    setStep(1);
  };

  return (
    <>
      <TextField
        sx={{ mb: 3 }}
        label={`Код надісланий на номер ${phone}`}
        id="auth-code"
        placeholder="Код"
        onChange={handleCodeChange}
        helperText={helperText}
        error={isError}
        focused
        fullWidth
      />

      <StyledAuthButton
        variant="contained"
        sx={{ p: 2, mb: 3 }}
        fullWidth
        disabled={isButtonDisabled}
        onClick={handleConfirmCode}
      >
        Надіслати код
      </StyledAuthButton>

      {timer === 0 && (
        <StyledTimer onClick={handleResendCode}>
          Надіслати код ще раз
        </StyledTimer>
      )}
      {timer !== 0 && (
        <StyledTimer>Надіслати код повторно через: {timer}</StyledTimer>
      )}
      <StyledBackButton onClick={handleEditPhone}>
        Змінити номер телефону
      </StyledBackButton>
    </>
  );
};

export default StepCodeEnter;
