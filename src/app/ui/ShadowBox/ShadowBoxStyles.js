'use client';

import { styled, Box } from '@mui/material';

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? `${justifyContent}` : 'center'};
  padding: ${({ padding }) => (padding ? `${padding}` : '10%')};
  box-shadow: 0 0 16px 0 rgba(190, 190, 190, 0.25);
  box-sizing: border-box;
  border-radius: 28px;
  border: 1px solid transparent;
  height: 100%;

  @media (max-width: 1304px) {
    border-radius: 28px;
  }
`;
