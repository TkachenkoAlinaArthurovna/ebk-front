'use client';

import { styled, Typography, Box, Stack } from '@mui/material';

export const StyledComponentWrapper = styled(Stack)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledNameAndInitialsContainer = styled(Stack)`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

export const StyledMainContainer = styled(Box)`
  padding: 24px;
  @media (max-width: 1200px) {
    padding: 20px 16px;
  }
`;

export const StyledWrapper = styled(Stack)`
  display: flex;
  margin-right: 12px;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #f3f3f3;
  border-radius: 50%;
  text-align: center;

  @media (max-width: 384px) {
    display: none;
  }
`;

export const StyledName = styled(Typography)`
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
`;

export const StyledDateWrapper = styled(Box)`
  display: flex;
  justify-content: end;
`;

export const StyledDate = styled(Typography)`
  display: inline-block;
  padding: 8px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
`;

export const StyledText = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 384px) {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    height: 70px;
  }
`;

export const StyledCustomerInitials = styled(Typography)`
  font-size: 18px;
  line-height: 28px;
  font-weight: bold;
  color: #9f9d9d;
`;