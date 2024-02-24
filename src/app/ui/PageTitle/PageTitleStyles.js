'use client';

import { styled, Box, Typography } from '@mui/material';

export const StyledTitle = styled(Typography)`
  font-size: 28px;
  font-style: normal;
  font-weight: 500;

  @media (max-width: 900px) {
    font-size: 26px;
  }

  @media (max-width: 650px) {
    font-size: 24px;
  }

  @media (max-width: 440px) {
    font-size: 22px;
  }
`;

export const StyledBox = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: ${({ position }) =>
    position === 'center' ? 'center' : 'flex-start'};

  @media (max-width: 700px) {
    justify-content: center;
    text-align: center;
  }
`;
