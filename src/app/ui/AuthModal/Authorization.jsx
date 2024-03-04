'use client';
import { Modal, Typography, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { StyledModalContent } from '@/app/ui/AuthModal/AuthorizationStyles';
import React, { useState } from 'react';
import StepPhoneEnter from '@/app/ui/AuthModal/StepPhoneEnter';
import StepCodeEnter from '@/app/ui/AuthModal/StepCodeEnter';
import { closeAuthModal } from '@/redux/slices/AuthModalSlice';

const Authorization = () => {
  const [phone, setPhone] = useState('+380');
  const [step, setStep] = useState(1);

  const isOpenAuthModal = useSelector(
    (state) => state.authModal.isOpenModalAuth,
  );

  const dispatch = useDispatch();
  const handleCloseAuthModal = () => dispatch(closeAuthModal());

  return (
    <>
      <Modal
        open={isOpenAuthModal}
        onClose={handleCloseAuthModal}
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
              />
            )}

            {step === 2 && (
              <StepCodeEnter
                phone={phone}
                handleClose={handleCloseAuthModal}
                setStep={setStep}
                setPhone={setPhone}
              />
            )}
          </Box>
        </StyledModalContent>
      </Modal>
    </>
  );
};

export default Authorization;
