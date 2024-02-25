'use client';

import { styled } from '@mui/system';
import Box from '@mui/system/Box';

export const StyledContent = styled(Box)`
  position: relative;
  max-width: 1344px;
  width: 100%;
  height: 100%;
  padding: 0 48px;
  margin: 0 auto;
  width: 100%;
  @media (max-width: 788px) {
    padding: 0 22px;
  }
  @media (max-width: 414px) {
    padding: 0 14px;
  }
`;
