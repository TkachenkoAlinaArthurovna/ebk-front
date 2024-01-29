'use client';

import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const WrapperSupport = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 70%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const WrapperConditions = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: 24px;
  @media (max-width: 1024px) {
    gap: 14px;
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const WrapperIcon = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: start;
  height: 50px;
  margin-bottom: 32px;
  @media (max-width: 1024px) {
    margin-bottom: 12px;
  }
`;

export const ShadowBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 32px;
  box-shadow: 0 0 16px 0 rgba(190, 190, 190, 0.25);
  box-sizing: border-box;
  border-radius: 28px;
  border: 1px solid transparent;
  height: 100%;

  @media (max-width: 1024px) {
    padding: 22px;
  }
`;
