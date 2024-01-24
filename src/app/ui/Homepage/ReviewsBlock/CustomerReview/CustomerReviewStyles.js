'use client';

import { styled, Typography, Box } from '@mui/material';

export const StyledMainContainer = styled(Box)`
  padding: 28px 24px;
`;

export const StyledName = styled(Typography)`
  margin-left: 12px;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
`;

export const StyledDate = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

export const StyledText = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  max-width: 400px;
  height: 170px;
  overflow: hidden;
  text-overflow: ellipsis;
  //white-space: nowrap;
`;

export const StyledCustomerInitials = styled(Typography)`
  font-size: 20px;
  line-height: 28px;
  font-weight: bold;
  color: #9f9d9d;
`;
