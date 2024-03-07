'use client';

import { Box, styled, Typography } from '@mui/material';

export const Wrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ItemInfoBlock = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 76%;
  padding-right: 30px;

  @media (max-width: 350px) {
    padding-right: 15px;
  }
`;

export const ItemPriceBlock = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
`;

export const Image = styled(Box)`
  display: flex;
  flex-shrink: 0;
  background-color: #f7f7f7;
  width: 84px;
  height: 84px;
  border-radius: 16px;
  margin-right: 16px;

  @media (max-width: 530px) {
    width: 0;
    height: 0;
  }
`;

export const ItemNameBlock = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const ItemName = styled(Typography)`
  font-size: 16px;
  font-weight: 400px;
  margin-bottom: 8px;

  @media (max-width: 530px) {
    font-size: 14px;
  }
`;

export const ItemArticle = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  color: #6a6a6a;

  @media (max-width: 530px) {
    font-size: 14px;
  }
`;

export const Quantity = styled(Box)`
  padding: 10px 16px;
  background-color: #f7f7f7;
  border-radius: 12px;
  font-size: 16px;

  @media (max-width: 530px) {
    padding: 5px 8px;
    font-size: 14px;
  }
`;

export const PriceBlock = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const Price = styled(Typography)`
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 530px) {
    font-size: 14px;
  }
`;

export const OldPrice = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  color: #dc362e;
  text-decoration: line-through;

  @media (max-width: 530px) {
    font-size: 14px;
  }
`;

export const NameImageBlock = styled(Box)`
  display: flex;
  align-items: center;
  width: 70%;
`;
