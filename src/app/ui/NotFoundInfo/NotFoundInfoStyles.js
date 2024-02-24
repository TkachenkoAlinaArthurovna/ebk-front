'use client';

import styled from '@emotion/styled';
import { Button, Typography, Box, Stack } from '@mui/material';

export const StyledPageWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding-top: 48px;

  @media (max-width: 650px) {
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 552px) {
    padding-top: 28px;
  }
`;

export const StyledImageContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  margin-bottom: 82px;

  @media (max-width: 552px) {
    margin: 38px 0 52px 0;
  }
`;

export const StyledText = styled(Typography)`
  font-size: 28px;
  font-weight: 500;
  line-height: 44px;

  @media (max-width: 836px) {
    font-size: 24px;
  }

  @media (max-width: 552px) {
    font-size: 20px;
  }

  @media (max-width: 440px) {
    font-size: 18px;
  }
`;

export const StyledButton = styled(Button)`
  padding: 16px 24px 16px 16px;
  text-transform: none;

`;

export const StyledTextContainer = styled(Stack)`
  margin: 48px 0 72px 0;

  @media (max-width: 552px) {
    margin: 38px 0 52px 0;
  }
`;