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
  List,
  AccordionSummary,
} from '@mui/material';

export const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 116px;
  left: 40px;
  height: 80vh;
  padding: 42px;
  border-radius: 24px;
  @media (max-width: 910px) {
    padding: 42px 20px;
  }
  @media (max-width: 788px) {
    left: 20px;
    right: 20px;
    padding: 20px;
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
  @media (max-width: 664px) {
    color: #49beb7;
  }
`;

export const StyledIconButton = styled(IconButton)`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  cursor: pointer;
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
  @media (max-width: 710px) {
    padding: 12px;
  }
`;

export const StyledTab = styled(Tab)`
  padding: 12px 32px 12px 12px;
  align-items: start !important;
  text-transform: none;
  font-size: 16px;
  font-weight: 500;
  @media (max-width: 860px) {
    font-size: 14px;
  }
  @media (max-width: 710px) {
    padding: 12px;
  }
`;

export const StyledTabs = styled(Tabs)`
  height: 100%;
  align-items: start;
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
  @media (max-width: 1250px) {
    width: 138px;
    font-size: 16px;
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
  box-sizing: border-box;
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

export const SubCategoriesWrapper = styled(Box)`
  display: flex;
  position: absolute;
  top: 0;
  right: -378px;
  height: 80vh;
  transition: opacity 0.3s ease-out;
`;

export const SubCategoriesList = styled(Box)`
  width: 420px;
  padding: 120px 42px 42px 20px;
  border-radius: 24px;
  background-color: #ffff;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
`;

export const StyledItem = styled(Box)`
  min-width: 400px;
  border-radius: 28px;
  &:hover {
    background-color: #eeeeee;
  }
`;

export const StyledButton = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 12px !important;
  &:hover {
    color: ${({ typebutton }) => {
      switch (typebutton) {
        case 'subcategory':
          return '#49BEB7';
      }
    }};
  }
`;

export const StyledButtonMob = styled(Box)`
  padding: 12px 16px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
`;
