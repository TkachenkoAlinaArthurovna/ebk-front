'use client';

import { styled, Button, Box } from '@mui/material';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;

  @media (max-width: 1024px) {
    margin-bottom: 40px;
  }
`;

export const ButtonBox = styled(Box)`
  display: flex;
  justify-content: end;
`;

export const StyledButton = styled(Button)`
  margin-top: 10px;
  padding: 12px 24px;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
  text-transform: none;
  color: #ffff;

  &:hover {
    background-color: #42ada7;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 1200px) {
    height: 43px;
  }
`;

export const FormContainer = styled(Box)`
  margin-top: 32px;
`;