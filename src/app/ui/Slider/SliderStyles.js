'use client';

import { styled } from '@mui/system';
import Box from '@mui/material/Box';

export const SwiperPrev = styled(Box)`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 4px;
  right: 62px;
  cursor: pointer;
`;

export const SwiperNext = styled(Box)`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 4px;
  right: 0;
  cursor: pointer;
`;

export const MainSwiperPrev = styled(Box)`
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 24px;
  cursor: pointer;
`;

export const MainSwiperNext = styled(Box)`
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 100;
  top: 50%;
  right: 24px;
  cursor: pointer;
`;
