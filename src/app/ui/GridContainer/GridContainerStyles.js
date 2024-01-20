'use client'

import { styled, Box } from '@mui/material';

export const StyledGridContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  gap: 24px;
  margin-top: 24px;
`;