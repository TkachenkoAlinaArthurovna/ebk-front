import { Modal, Typography, Box } from '@mui/material';
import { StyledModalContent } from '@/app/ui/Header/AuthModal/AuthorizationStyles';
import { useState } from 'react';
import StepPhoneEnter from '@/app/ui/Header/AuthModal/StepPhoneEnter';
import StepCodeEnter from '@/app/ui/Header/AuthModal/StepCodeEnter';

const Authorization = ({ isOpen, handleClose, isStub }) => {
  const [phone, setPhone] = useState('+380');
  const [step, setStep] = useState(1);

  return (
    <>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-auth-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModalContent>
          <Typography id="modal-auth-title" variant="h4" sx={{ mb: 2 }}>
            Вхід
          </Typography>

          <Box>
            {step === 1 && (
              <StepPhoneEnter
                setPhone={setPhone}
                phone={phone}
                setStep={setStep}
                isStub={isStub}
              />
            )}

            {step === 2 && (
              <StepCodeEnter
                phone={phone}
                handleClose={handleClose}
                setStep={setStep}
                setPhone={setPhone}
                isStub={isStub}
              />
            )}
          </Box>
        </StyledModalContent>
      </Modal>
    </>
  );
};

export default Authorization;
