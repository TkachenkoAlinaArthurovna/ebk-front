'use client';

import { styled } from '@mui/system';
import { Grid, Box, Button } from '@mui/material';

export const StyledContact = styled(Box)`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledGridContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 70%;
  margin-bottom: 32px;

  @media (max-width: 700px) {
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    align-items: start;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-direction: row;
    gap: 0;
  }
`;

export const StyledGridItem = styled(Grid)`
  width: 100%;
`;

export const StyledButton = styled(Button)`
  height: 56px;
  @media (max-width: 1200px) {
    position: relative;
    left: 50%;
    transform: translate(-50%);
    max-width: 60%;
    height: 43px;
    padding: 0 16px;
  }
`;
