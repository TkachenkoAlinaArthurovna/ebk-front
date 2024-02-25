'use client';

import { styled, Box } from '@mui/material';

export const StyledGridContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 24px;

  @media (max-width: 1155px) {
    grid-template-columns: ${({ columns_on_small_screen }) =>
    columns_on_small_screen === '1' ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)'};
  }

  @media (max-width: 900px) {
    gap: 18px;
  }

  @media (max-width: 650px) {
    grid-template-columns: ${({ columns_on_small_screen }) =>
    columns_on_small_screen === '1' ? '1fr' : 'repeat(2, 1fr)'};
    gap: 26px;
  }
`;
