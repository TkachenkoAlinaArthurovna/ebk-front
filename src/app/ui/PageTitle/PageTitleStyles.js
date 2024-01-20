'use client'

import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

export const StyledTitle = styled(Typography)`
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 44px;
`;

export const StyledBox = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: ${({ position }) => (position === 'center' ? 'center' : 'flex-start')};
`;
