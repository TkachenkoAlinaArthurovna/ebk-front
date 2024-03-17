'use client';

import { styled } from '@mui/system';
import { Box, Typography, Paper, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';

export const StyledPaper = styled(Paper)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 800px;
  padding: 36px;
  border: none;
  border-radius: 24px;
  @media (max-width: 900px) {
    width: 656px;
  }
  @media (max-width: 700px) {
    width: auto;
    left: 22px;
    right: 22px;
    transform: translate(0, -50%);
  }
  @media (max-width: 500px) {
    padding: 26px;
  }
`;

export const StyledWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const StyledWrapperForProduct = styled(Box)`
  margin-bottom: 24px;
`;

export const StyledTitle = styled(Typography)`
  font-size: 28px;
  font-weight: 500;
  @media (max-width: 664px) {
    font-size: 24px;
  }
`;

export const StyledIconButton = styled(IconButton)`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const StyledButton = styled(Button)`
  width: 276px;
  height: 56px;
  padding: 0 20px;
  margin-right: 20px;
  border: 1px solid #e5e5e5;
  border-radius: 100px;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 500;
  text-transform: none;
  color: #212121;
  background-color: #ffff !important;
  @media (max-width: 1200px) {
    height: 43px;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
