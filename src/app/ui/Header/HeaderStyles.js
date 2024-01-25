'use client';

import { styled } from '@mui/system';
import { Paper, List, Button, Box } from '@mui/material';

export const StyledPaper = styled(Paper)`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 32px;
  transform: translate(-50%, -50%);
  border-radius: 24px;
  box-shadow: 24;
`;

export const StyledList = styled(List)`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
`;
export const StyledButtonCatalog = styled(Button)`
  width: 138px;
  height: 56px;
  margin-right: 32px;
  boxsizing: border-box;
  fontsize: 16px;
  @media (max-width: 1250px) {
    width: 138px;
    font-size: 16px;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const StyledButtonSideBar = styled(Button)`
  width: 48%;
  padding: 10px 0;
  @media (max-width: 1250px) {
    height: 44px;
  }
  @media (max-width: 900px) {
    width: 140px;
  }
  @media (max-width: 700px) {
    height: 34px;
    width: 89px;
    font-size: 12px;
  }
`;

export const StyledSideBarContainer = styled(Box)`
  width: 436px;
  boxsizing: border-box;
  padding: 60px 24px 28px 48px;
  @media (max-width: 1250px) {
  }
  @media (max-width: 1100px) {
    width: 348px;
    padding: 60px 24px 28px 28px;
  }
  @media (max-width: 700px) {
    width: 278px;
  }
`;

export const StyledPhoneBox = styled(Box)`
  position: relative;
  min-width: 240px;
  margin-right: 32px;
  display: flex;
  align-items: center;
  @media (max-width: 1250px) {
  }
  @media (max-width: 1100px) {
  min-width: 10px;
  margin-right: 10px;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
