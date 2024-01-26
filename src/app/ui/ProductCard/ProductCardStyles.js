'use client';

import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

export const StyledIconButton = styled(IconButton)`
  position: absolute;
  right: 14px;
  bottom: 24px;
  width: 40px;
  height: 40px;
  border: 1px solid #e5e5e5;
  @media (max-width: 780px) {
    right: 12px;
  }
`;

export const StyledIconFavoriteButton = styled(IconButton)`
  position: absolute;
  right: 14px;
  bottom: 88px;
  width: 40px;
  height: 40px;
  border: 1px solid #e5e5e5;
  @media (max-width: 780px) {
    right: 12px;
  }
  @media (max-width: 480px) {
    bottom: 82px;
  }
`;

export const Title = styled(Typography)`
  margin: 0 14px;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 780px) {
    margin: 0 12px;
  }
  @media (max-width: 650px) {
    font-size: 18px;
  }
  @media (max-width: 585px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    margin: 0 6px;
  }
`;

export const StyledCardContent = styled(CardContent)`
  padding: 14px;
  @media (max-width: 780px) {
    padding: 12px;
  }
  @media (max-width: 480px) {
    padding: 12px 6px;
  }
`;
