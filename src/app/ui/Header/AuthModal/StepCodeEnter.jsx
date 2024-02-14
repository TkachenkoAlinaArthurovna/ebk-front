import TextField from '@mui/material/TextField';
import { StyledAuthButton } from '@/app/ui/Header/AuthModal/AuthorizationStyles';
import { useState } from 'react';
import { useAuth } from '@/redux/contexts/AuthContext';

const StepCodeEnter = ({ phone, handleClose }) => {
  const [code, setCode] = useState('');
  const [helperText, setHelperText] = useState(
    'Введіть код, який ми відправили на ваш номер',
  );
  const [isError, setIsError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const { login } = useAuth();

  const handleCodeChange = (event) => {
    setCode(event.target.value);
    if (event.target.value.length === 4) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleConfirmCode = () => {
    // validation
    // send to server
    // error mock
    if (code !== phone.slice(-4)) {
      setIsError(true);
      setHelperText('Невірний код');
      return;
    }

    // auth on server
    login('mock-token');
    handleClose();
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
        sx={{ p: 2 }}
        fullWidth
        disabled={isButtonDisabled}
        onClick={handleConfirmCode}
      >
        Надіслати код
      </StyledAuthButton>
    </>
  );
};

export default StepCodeEnter;
