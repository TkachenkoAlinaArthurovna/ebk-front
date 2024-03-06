import { styled } from '@mui/system';

import { Box, Typography } from '@mui/material';

export const StyledEmptyCartWrapper = styled(Box)`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
  background-color: #f7f7f7;
`;

export const StyledLink = styled(Typography)`
  color: #49beb7;
  cursor: pointer;
  text-decoration: underline;
`;
