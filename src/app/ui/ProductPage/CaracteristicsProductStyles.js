'use client';
import { styled } from '@mui/system';
import { Grid, Typography, ListItem, Box } from '@mui/material';

export const StyledImg = styled('img')`
  width: inherit;
  border-radius: 28px;
`;

export const StyledGridOrder = styled(Grid)(({ theme }) => ({
  order: -1,
  [theme.breakpoints.down('md')]: {
    order: 1,
    padding: '24px 0 0 24px ',
  },
}));

export const StyledTypography = styled(Typography)`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 28px;
  @media (max-width: 900px) {
    font-size: 26px;
  }

  @media (max-width: 650px) {
    font-size: 24px;
  }

  @media (max-width: 440px) {
    font-size: 22px;
  }
`;

export const StyledListItem = styled(ListItem)`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 16px 16px 16px 0;
`;

export const StyleTypographyName = styled(Typography)`
  font-weight: 400;
  font-size: 28px;
  margin-bottom: 8px;
  @media (max-width: 900px) {
    font-size: 26px;
  }

  @media (max-width: 650px) {
    font-size: 24px;
  }

  @media (max-width: 440px) {
    font-size: 22px;
  }
`;
