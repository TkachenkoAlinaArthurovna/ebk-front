'use client';

import { styled } from '@mui/system';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';

export const StyledSection = styled(Box)`
  margin-bottom: 80px;
  @media (max-width: 1024px) {
    margin-bottom: 40px;
  }
`;

export const WrapperAboutProduct = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: start;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const WrapperSlider = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const WrapperContent = styled(Box)`
  width: 45%;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const WrapperColor = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

export const Color = styled(Box)`
  width: 30px;
  height: 30px;
  margin-right: 8px;
  border-radius: 50%;
  box-shadow: 0 0 10px 0 #d0d0d0;
  cursor: pointer;
`;

export const StyledIconFavoriteButton = styled(IconButton)`
  width: 56px;
  height: 56px;
  margin-left: 16px;
  border: 1px solid #e5e5e5;
  @media (max-width: 1200px) {
    width: 43px;
    height: 43px;
  }
`;

export const DeliveryIcon = styled(Box)`
  height: 16px;
  width: 16px;
  display: flex;
  justify-content: center;
  margin-right: 10px;
`;
