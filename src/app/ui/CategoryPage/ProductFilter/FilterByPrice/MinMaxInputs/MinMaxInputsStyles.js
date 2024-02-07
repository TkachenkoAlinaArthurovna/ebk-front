'use client';

import { styled, Box, OutlinedInput, FormControl, Button } from '@mui/material';

export const StyledWrapper = styled(Box)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;

  &::before {
    content: '—';
    position: absolute;
    font-size: 16px;
    color: #212121;
  }
`;

export const StyledMinPrice = styled(FormControl)`
  margin-right: 40px;
`;

export const StyledInput = styled(OutlinedInput)`
  border-radius: 8px;
  font-size: 16px;
  letter-spacing: 0.5px;
  color: #212121;
  border-color: red;

  & .MuiInputBase-input {
    padding: 10px 10px 10px 12px;
  }

  & .MuiOutlinedInput-notchedOutline {
    border-color: #999999;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 16px;
  padding: 8px 0;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;