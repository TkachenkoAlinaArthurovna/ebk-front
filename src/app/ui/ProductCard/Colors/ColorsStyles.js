'use client';

import { styled } from '@mui/system';
import Box from '@mui/system/Box';

export const WrapperBox = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: 22px;
`;

export const Color = styled(Box)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: red;
`;