'use client';

import { styled } from '@mui/system';
import Box from '@mui/system/Box';

export const WrapperBoxNew = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
`;

export const WrapperBoxOld = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #6a6a6a;
`;

export const Discount = styled(Box)`
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 8px;
  border-radius: 8px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  background: #dc362e;
`;
