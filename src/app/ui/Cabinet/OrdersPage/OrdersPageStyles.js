'use client';

import { Box, styled, Button } from '@mui/material';

export const Wrapper = styled(Box)`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const OrdersWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 100px;
`;

export const OrdersList = styled(Box)`
  margin-bottom: 24px;
`;

export const ButtonBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  margin-top: 10px;
  padding: 12px 24px;
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