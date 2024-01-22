'use client';

import { styled } from '@mui/system';
import { Paper, List } from '@mui/material';

export const StyledPaper = styled(Paper)`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 32px;
  transform: translate(-50%, -50%);
  border-radius: 24px;
  box-shadow: 24;
`;

export const StyledList = styled(List)`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
`;
