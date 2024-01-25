'use client';

import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

export const StyledIconButton = styled(IconButton)`
  position: absolute;
  right: 16px;
  bottom: 24px;
  width: 40px;
  height: 40px;
  border: 1px solid #e5e5e5;
`;

export const StyledIconFavoriteButton = styled(IconButton)`
  position: absolute;
  right: 70px;
  bottom: 24px;
  width: 40px;
  height: 40px;
  border: 1px solid #e5e5e5;
`;

export const Title = styled(Typography)`
  margin: 0 14px;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 650px) {
    font-size: 18px;
  }
`;

export const StyledCardContent = styled(CardContent)`
  padding: 14px;
  @media (max-width: 780px) {
    padding: 12px;
  }
`;
