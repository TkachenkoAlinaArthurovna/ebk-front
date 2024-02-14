import TextField from '@mui/material/TextField';
import { StyledAuthButton } from '@/app/ui/Header/AuthModal/AuthorizationStyles';
import { useState } from 'react';

const StepPhoneEnter = ({ setPhone, phone, setStep }) => {
  const defaultHelperText =
    'Необхідно вірно вказати код країни +380. Приклад: +380 36 982 5874';
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [helperText, setHelperText] = useState(defaultHelperText);
  const [isError, setIsError] = useState(false);

  const handlePhoneChange = (e) => {
    phone = e.target.value;
    setHelperText(defaultHelperText);
    setIsError(false);
    if (phone.length >= 13) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }

    setPhone(phone);
  };

  const handleNextStep = () => {
    // validation
    // send to server
    // error mock
    if (phone.slice(-1) % 2 === 1) {
      setIsError(true);
      setHelperText('Невірний номер телефону');
      return;
    }

    setStep(2);
  };

  return (
    <>
      <TextField
        sx={{ mb: 3 }}
        label="Номер телефону"
        id="auth-phone"
        placeholder="+380"
        defaultValue={phone}
        onChange={handlePhoneChange}
        helperText={helperText}
        error={isError}
        fullWidth
      />

      <StyledAuthButton
        variant="contained"
        sx={{ p: 2 }}
        fullWidth
        disabled={isButtonDisabled}
        onClick={handleNextStep}
      >
        Увійти
      </StyledAuthButton>
    </>
  );
};

export default StepPhoneEnter;
