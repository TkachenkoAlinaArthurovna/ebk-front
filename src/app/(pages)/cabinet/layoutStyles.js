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

// export const StyledPageContent = styled(Box)`
//   width: 70%;
//   @media (max-width: 700px) {
//     width: 100%;
//   }
// `;
