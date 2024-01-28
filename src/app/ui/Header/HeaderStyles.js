'use client';

import { styled } from '@mui/system';
import Link from 'next/link';
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
  AppBar,
  ListItemText,
  Toolbar,
  Accordion,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
  @media (max-width: 1200px) {
    font-size: 16px;
    height: 43px;
  }
  @media (max-width: 900px) {
    // display: none;
    position: absolute;
    top: 115px;
    width: 100%;
    margin-right: 0px;
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
  @media (max-width: 900px) {
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
  @media (max-width: 900px) {
    width: 278px;
  }
`;

export const StyledListItemText = styled(ListItemText)`
  width: 149px;
  // @media (max-width: 1200px) {
  //   display: none;
  // }
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justifycontent: space-between;
`;

export const StyledLinkFavorite = styled(Link)`
  @media (max-width: 900px) {
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
export const StyledBoxIcons = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 120px;
  @media (max-width: 900px) {
    width: 41px;
  }
`;
export const StyledIconButtonMenu = styled(IconButton)`
  margin-right: 16px;
  @media (max-width: 900px) {
    margin-right: 0px;
  }
`;

export const StyledMenuIcon = styled(MenuIcon)`
  @media (max-width: 900px) {
    font-size: 24px;
    // font-size: 16px;
    margin-right: 0;
  }
`;

export const StyledLogoBox = styled(Box)`
  margin-right: 32px;
  @media (max-width: 900px) {
    margin-right: 12px;
  }
`;

export const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
  color: #252a31;
  @media (max-width: 900px) {
    font-size: 24px;
  }
`;

export const StyledLinkCart = styled(Link)`
  @media (max-width: 900px) {
    position: absolute;
    top: 18%;
    right: 5px;
  }
`;
export const StyledLinkCabinet = styled(Link)`
  @media (max-width: 900px) {
    display: none;
  }
`;

export const StyledAppBar = styled(AppBar)`
  padding: 26px 0;
  @media (max-width: 900px) {
    height: 210px;
  }
`;

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  position: 'absolute',
  top: '-35px',
  right: 8,
  zIndex: 10,
  marging: 0,
  padding: 0,
  boxShadow: 'none',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

export const StyledBoxPhones = styled(Box)(({ theme }) => ({
  width: '230px',
  position: 'relative',
  padding: 0,
  margin: 0,
  height: '100%',
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));
