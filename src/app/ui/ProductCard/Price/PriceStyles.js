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
  @media (max-width: 480px) {
    font-size: 18px;
  }
  @media (max-width: 380px) {
    font-size: 16px;
  }
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
  @media (max-width: 380px) {
    font-size: 14px;
  }
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
  @media (max-width: 1200px) {
    top: 12px;
    left: 12px;
    font-size: 12px;
    font-weight: 500;
  }
  @media (max-width: 860px) {
    padding: 6px;
  }
  @media (max-width: 440px) {
    top: 10px;
    left: 10px;
    /* padding: 4px; */
    font-size: 10px;
  }
`;

export const DiscountProductPage = styled(Box)`
  width: 60px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  border-radius: 8px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  color: #dc362e;
  background-color: #fcebea;
`;
