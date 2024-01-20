'use client'

import { styled, Stack, Typography } from '@mui/material';

export const StyledWrapper = styled(Stack)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: center;
  height: 100%;
`

export const StyledTitle = styled(Typography)`
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const StyledText = styled(Typography)`
margin-top: 8px;
font-size: 16px;
font-weight: 300;
line-height: 24px;
letter-spacing: 0.5px;
color: #0C0C0C;
`;

