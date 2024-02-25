'use client';

import { styled, Box, Button } from '@mui/material';

export const StyledWrapper = styled(Box)`
  max-width: 320px;
  min-width: 320px;
  margin-right: 16px;
  box-sizing: border-box;
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const StyledWrapperSide = styled(Box)`
  width: 332px;
  padding: 6px;
  box-sizing: border-box;
`;

export const StyledSubstrate = styled(Box)`
  position: sticky;
  bottom: 0;
  z-index: 100;
  padding: 0 0 14px 0;
  border: 1px solid white;
  background-color: #ffff;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
  padding: 8px 0;
  font-size: 16px;
  font-weight: 500;
  text-transform: none;
  color: #ffff;
  &:hover {
    background-color: #42ada7;
  }
`;

export const StyledHeadFilter = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;
