'use client';

import { styled, Box, Typography, Chip } from '@mui/material';

export const StyledWrapper = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1100px) {
    align-items: start;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const StyledChip = styled(Chip)`
  background-color: #f7f7f7;
  border-radius: 8px;
  padding: 20px 4px 20px 12px;
  font-size: 16px;
  letter-spacing: 0.5px;
  font-weight: 400;
  @media (max-width: 1100px) {
    padding: 4px;
    font-size: 14px;
  }
`;

export const StyledSelectedFilterText = styled(Typography)`
  min-width: 140px;
  font-size: 16px;
  letter-spacing: 0.5px;
  font-weight: 400;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  @media (max-width: 600px) {
    margin-bottom: 16px;
  }
`;

export const StyledSelectedFilterParamsBox = styled(Box)`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin-left: 16px;
  gap: 6px;
  @media (max-width: 600px) {
    margin-left: 0;
  }
`;
