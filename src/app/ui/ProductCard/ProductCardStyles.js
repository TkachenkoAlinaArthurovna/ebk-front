'use client';

import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

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
  margin: 0 16px;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
`;
