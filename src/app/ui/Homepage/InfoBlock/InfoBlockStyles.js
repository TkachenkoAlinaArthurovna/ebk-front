'use client';

import { styled, Box } from '@mui/material';

export const StyledContainer = styled(Box)`
  margin-bottom: 80px;

  @media (max-width: 900px) {
    margin-bottom: 60px;
  }

  @media (max-width: 320px) {
    margin-bottom: 40px;
  }
`;
