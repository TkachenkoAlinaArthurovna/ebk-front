'use client';

import { styled, Box, Modal, Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const StyledModalContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  background-color: #fff;
  box-shadow: 24;
  padding: 40px;
  border: none;
  border-radius: 28px;

  @media (max-width: 740px) {
    width: auto;
    left: 22px;
    right: 22px;
    transform: translate(0, -50%);
  }

  @media (max-width: 564px) {
    transform: translate(0, -40%);
  }

  @media (max-width: 414px) {
    left: 14px;
    right: 14px;
  }
`;

export const ModalTitle = styled(Typography)`
  margin-bottom: 30px;
  text-align: center;
  font-size: 24px;
`;

export const DevelopersListWrapper = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;

  @media (max-width: 564px) {
    grid-template-columns: 1fr;
  }
`;

export const CloseButton = styled(CloseIcon)`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;

export const StyledModal = styled(Modal)`
  overflow: scroll;
`;