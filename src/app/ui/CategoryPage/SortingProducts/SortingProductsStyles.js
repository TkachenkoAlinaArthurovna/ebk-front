'use client';

import { styled, Select } from '@mui/material';

export const StyledSelect = styled(Select)`
  background-color: #f7f7f7;
  border-radius: 8px;
  font-size: 16px;
  letter-spacing: 0.5px;

  & .MuiInputBase-root {
    border: none !important;
    outline: none !important;
  }

  & .MuiOutlinedInput-notchedOutline {
    border: none !important;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
