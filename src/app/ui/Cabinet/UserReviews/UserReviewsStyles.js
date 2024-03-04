'use client';

import { Box, styled, Button } from '@mui/material';

export const Wrapper = styled(Box)`
  width: 100%;
  margin-bottom: 100px;
  padding: 0;
`;

export const ShowMoreBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  margin-top: 10px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  text-transform: none;
  color: #ffff;
  &:hover {
    background-color: #42ada7;
  }
`;