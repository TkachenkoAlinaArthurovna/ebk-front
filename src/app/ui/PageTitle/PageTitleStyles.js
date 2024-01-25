'use client';

import { styled, Box, Typography } from '@mui/material';

export const StyledTitle = styled(Typography)`
  font-size: 36px;
  font-style: normal;
  font-weight: 500;

  @media (max-width: 900px) {
    font-size: 32px;
  }

  @media (max-width: 650px) {
    font-size: 28px;
  }
`;

export const StyledBox = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: ${({ position }) =>
    position === 'center' ? 'center' : 'flex-start'};

  @media (max-width: 650px) {
    justify-content: center;
    text-align: center;
  }
`;
