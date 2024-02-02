'use client';

import { styled, Box, Typography, Chip } from '@mui/material';

export const StyledWrapper = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledListItem = styled(Box)`
  margin-right: 8px;

  &:last-child {
    margin: 0;
  }
`;

export const StyledChip = styled(Chip)`
  background-color: #f7f7f7;
  border-radius: 8px;
  padding: 20px 4px 20px 12px;
  font-size: 16px;
  letter-spacing: 0.5px;
  font-weight: 400;
`;

export const StyledSelectedFilterText = styled(Typography)`
  font-size: 16px;
  letter-spacing: 0.5px;
  font-weight: 400;
`;

export const StyledSelectedFilterParamsBox = styled(Box)`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin-left: 16px;
`;