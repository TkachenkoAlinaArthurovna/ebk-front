'use client';

import { styled } from '@mui/system';
import Box from '@mui/system/Box';

export const WrapperImg = styled(Box)`
  position: relative;
  height: 500px;
  margin: 24px 0;
  @media (max-width: 1024px) {
    height: 400px;
  }
  @media (max-width: 700px) {
    height: 300px;
  }
`;

export const WrapperGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  gap: 24px;
  margin: 24px 0;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
