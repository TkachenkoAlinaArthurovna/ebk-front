'use client';

import { styled, Box, IconButton } from '@mui/material';

export const StyledWrapper = styled(Box)`
  margin-bottom: 80px;
`;

export const StyledTitleBox = styled(Box)`
  margin-top: 48px;
  margin-bottom: 10px;
`;

export const StyledSelectedFiltersWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const StyledContentWrapper = styled(Box)`
  display: flex;
`;

export const StyledIconButton = styled(IconButton)`
  display: none;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  @media (max-width: 1100px) {
    display: flex;
  }
  @media (max-width: 400px) {
    margin-left: 0;
  }
`;

export const StyledRightWrapper = styled(Box)`
  display: flex;
  align-items: center;
  @media (max-width: 1100px) {
    justify-content: end;
  }
`;

export const WrapperNoProducts = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  font-size: 20px;
  color: #49beb7;
`;
