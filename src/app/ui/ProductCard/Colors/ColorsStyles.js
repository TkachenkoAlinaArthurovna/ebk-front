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
  box-shadow: 0px 0px 10px #d0d0d0;
  cursor: pointer;
`;

export const WrapperColors = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px #d0d0d0;
`;
