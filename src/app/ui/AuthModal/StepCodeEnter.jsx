import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {
  StyledAuthButton,
  StyledBackButton,
  StyledTimer,
} from '@/app/ui/AuthModal/AuthorizationStyles';
import React, { useState } from 'react';
import { useAuth } from '@/redux/contexts/AuthContext';

const StepCodeEnter = ({ phone, handleClose, setStep, setPhone }) => {
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
        if (response.status !== 202) {
          setIsError(true);
          return;
        }

        return response.json();
      })
      .then((data) => {
        login(data.token);
        handleClose();
        setStep(1);
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
