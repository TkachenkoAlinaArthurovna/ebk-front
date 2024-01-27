'use client';

import { styled } from '@mui/system';
import {
  Paper,
  Box,
  Tabs,
  Tab,
  Button,
  IconButton,
  Typography,
} from '@mui/material';

export const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 116px;
  left: 48px;
  padding: 42px;
  border-radius: 24px;
  right: ${({ papertype }) => {
    switch (papertype) {
      case 'mob':
        return '48px';
      case 'desktop':
        return 'none';
    }
  }};
  @media (max-width: 910px) {
    padding: 42px 20px;
  }
  @media (max-width: 810px) {
    padding: 42px 10px;
  }
  @media (max-width: 788px) {
    left: 20px;
    right: 20px;
    padding: 42px 0px;
  }
  @media (max-width: 414px) {
    left: 14px;
    right: 14px;
  }
`;

export const StyledWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
`;

export const StyledTitle = styled(Typography)`
  padding: 12px;
  font-size: 28px;
  font-weight: 500;

  @media (max-width: 900px) {
    font-size: 26px;
  }

  @media (max-width: 650px) {
    font-size: 24px;
  }
`;

export const StyledIconButton = styled(IconButton)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: ${({ closetype }) => {
    switch (closetype) {
      case 'mob':
        return 'absolute';
    }
  }};
  top: ${({ closetype }) => {
    switch (closetype) {
      case 'mob':
        return '30px';
    }
  }};
  right: ${({ closetype }) => {
    switch (closetype) {
      case 'mob':
        return '30px';
    }
  }};
`;

export const SubCategoryLink = styled(Box)`
  padding: 12px 12px 12px 32px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #4d4d4d;
  &:hover {
    color: #49beb7;
    text-decoration: underline;
  }
  @media (max-width: 860px) {
    font-size: 14px;
  }
  @media (max-width: 760px) {
    padding: 12px;
  }
`;

export const StyledTab = styled(Tab)`
  padding: 12px 32px 12px 12px;
  align-items: start !important;
  text-transform: none;
  font-size: 16px;
  font-weight: 500;
  color: #4d4d4d;
  @media (max-width: 860px) {
    font-size: 14px;
  }
  @media (max-width: 760px) {
    padding: 12px;
  }
`;

export const StyledTabs = styled(Tabs)`
  height: 100%;
  align-items: start;
  @media (max-width: 600px) {
    min-width: 50%;
  }
`;

export const StyledBox = styled(Box)`
  flex-grow: 1;
  display: flex;
  align-items: start;
`;

export const StyledButtonCatalog = styled(Button)`
  width: 138px;
  height: 56px;
  margin-right: 32px;
  box-sizing: border-box;
  font-size: 16px;
  @media (max-width: 1200px) {
    font-size: 16px;
    height: 43px;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const StyledButtonSideBar = styled(Button)`
  background-color: ${({ typebutton }) => {
    switch (typebutton) {
      case 'registration':
        return '#ffff !important';
    }
  }};
  width: 48%;
  margin: 24px 8px 0 0;
  padding: 10px 0;
  @media (max-width: 1200px) {
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
  box-sizing: border-box;
  padding: 20px 24px 28px 48px;
  @media (max-width: 1250px) {
  }
  @media (max-width: 1100px) {
    width: 348px;
    // padding: 60px 24px 28px 28px;
  }
  @media (max-width: 700px) {
    width: 278px;
  }
`;

export const StyledPhoneBox = styled(Box)`
  position: relative;
  width: 215px;
  margin-right: 32px;
  display: flex;
  align-items: center;
  @media (max-width: 1100px) {
    position: relative;
    margin-right: 10px;
    width: 65px;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
