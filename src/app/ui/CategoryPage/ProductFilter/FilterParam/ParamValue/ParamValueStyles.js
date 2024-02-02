'use client';

import { styled, Box, Typography, Checkbox } from '@mui/material';

export const StyledWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StyledParamValue = styled(Typography)`
  font-size: 16px;
  letter-spacing: 0.5px;
`;

export const StyledCheckbox = styled(Checkbox)`
  width: 18px;
  height: 18px;
  padding: 0;
  margin: 0;
  color: #999999;
`;