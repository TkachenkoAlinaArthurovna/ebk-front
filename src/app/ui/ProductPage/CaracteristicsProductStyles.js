'use client';
import { styled } from '@mui/system';
import { Grid, Typography, ListItem, Box } from '@mui/material';

export const StyledWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledImg = styled('img')`
  max-width: 86%;
  border-radius: 28px;
  @media (max-width: 900px) {
    max-height: 380px;
  }
`;

export const StyledLeft = styled(Box)`
  width: 48%;
  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

export const StyledRight = styled(Box)`
  width: 48%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

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
    text-align: center;
  }

  @media (max-width: 650px) {
    font-size: 24px;
  }

  @media (max-width: 440px) {
    font-size: 22px;
  }
`;
