'use client';

import { styled } from '@mui/system';
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)`
  height: 56px;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 16px;
  color: #ffff;
  @media (max-width: 1200px) {
    height: 43px;
  }
`;
