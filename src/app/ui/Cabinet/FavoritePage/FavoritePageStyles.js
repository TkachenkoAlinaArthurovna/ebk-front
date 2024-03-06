'use client';

import { styled, Box } from '@mui/material';
import MuiPagination from '@mui/material/Pagination';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductList = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: 16px;
  margin-top: 32px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StyledPagination = styled(MuiPagination)`
  margin-top: 84px;
  margin-bottom: 80px;
  letter-spacing: 0.5px;
`;
