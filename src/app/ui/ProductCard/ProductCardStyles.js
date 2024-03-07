'use client';

import { height, styled } from '@mui/system';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Link from 'next/link';

export const StyledCard = styled(Card)`
  position: relative;
  max-width: 300;
  height: 100%;
  max-height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  box-shadow: none;
  @media (max-width: 800px) {
    max-height: 460px;
  }
  @media (max-width: 700px) {
    max-height: 410px;
  }
  @media (max-width: 500px) {
    max-height: 380px;
  }
`;

export const StyledIconButton = styled(IconButton)`
  position: absolute;
  right: 14px;
  bottom: 24px;
  width: 40px;
  height: 40px;
  border: 1px solid #e5e5e5;
  @media (max-width: 800px) {
    right: 12px;
  }
`;

export const StyledIconFavoriteButton = styled(IconButton)`
  position: absolute;
  right: 14px;
  bottom: 70px;
  width: 40px;
  height: 40px;
  border: none;
  @media (max-width: 800px) {
    right: 12px;
  }
  @media (max-width: 500px) {
    bottom: 70px;
  }
  @media (max-width: 400px) {
    top: 4px;
    left: 4px;
  }
`;

export const Title = styled(Typography)`
  height: 98px;
  margin: 0 14px;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  overflow: hidden;
  @media (max-width: 1200px) {
    font-size: 16px;
  }
  @media (max-width: 800px) {
    margin: 0 12px;
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
  @media (max-width: 500px) {
    height: 90px;
    margin: 0 6px;
  }
  @media (max-width: 400px) {
    height: 80px;
  }
`;

export const StyledCardLink = styled(Box)`
  height: 70%;
  margin-bottom: 10px;
  @media (max-width: 1100px) {
    height: 74%;
  }
  @media (max-width: 700px) {
    height: 70%;
  }
  @media (max-width: 400px) {
    height: 80%;
  }
`;

export const StyledCardContent = styled(CardContent)`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 14px;
  @media (max-width: 1100px) {
    height: 26%;
  }
  @media (max-width: 800px) {
    padding: 12px;
  }
  @media (max-width: 400px) {
    height: 20%;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100%;
`;
