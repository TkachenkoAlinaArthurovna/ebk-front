'use client';

import { Box, styled } from '@mui/material';

export const StyledPagesLayout = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
