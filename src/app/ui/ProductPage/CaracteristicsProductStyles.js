'use client';
import { styled } from '@mui/system';
import { Grid, Typography, ListItem, Box } from '@mui/material';

export const StyledImg = styled('img')`
  width: inherit;
  // height: 348px;
  border-radius: 28px;
  // @media (max-width: 1250px) {
  //   width: 384px;
  //   height: 332px;
  //   border-radius: 28px;
  // }
`;

export const StyledGridOrder = styled(Grid)(({ theme }) => ({
  order: -1,
  [theme.breakpoints.down('md')]: {
    order: 1,
    padding: '24px 0 0 24px ',
  },
}));

export const StyledTypography = styled(Typography)`
  font-weight: 500;
  font-size: 28px;
`;

export const StyledListItem = styled(ListItem)`
  display: flex;
  justify-content: space-between;
  padding: 12px 0 12px 0;
`;

export const StyleTypographyName = styled(Typography)`
  font-weight: 400;
  font-size: 28px;
  margin-bottom: 8px;
`;

export const StyleTypographyOldPrice = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  color: #6a6a6a;
`;

export const StyledTypographyNewPrice = styled(Typography)`
  margin-right: 20px;
  font-size: 28px;
  font-weight: 500;
  color: #dc362e;
`;

export const StyledDiscountBox = styled(Box)`
  background-color: #fcebea;
  padding: 6px;
  border-radius: 12px;
  color: #dc362e;
`;