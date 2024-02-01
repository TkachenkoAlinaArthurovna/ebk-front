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
  TextField,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// Header

export const StyledListItemText = styled(ListItemText)`
  width: 149px;
`;

export const StyledBoxIcons = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 120px;
`;

export const StyledMenuIcon = styled(MenuIcon)``;

export const StyledLogoBox = styled(Box)`
  margin-right: 32px;
  @media (max-width: 700px) {
    position: absolute;
    left: 51px;
  }
`;

export const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
  color: #252a31;
  @media (max-width: 900px) {
    font-size: 24px;
  }
`;

export const StyledLinkCart = styled(Link)`
  @media (max-width: 400px) {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
  }
`;

export const StyledLinkCabinet = styled(Link)`
  @media (max-width: 400px) {
    display: none;
  }
`;

export const StyledLinkFavorite = styled(Link)`
  @media (max-width: 400px) {
    display: none;
  }
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const StyledAppBar = styled(AppBar)`
  padding: 26px 0;
  margin-bottom: 26px;
  @media (max-width: 900px) {
    height: 170px;
  }
  @media (max-width: 700px) {
    height: 216px;
  }
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
    position: absolute;
    top: 74px;
    width: 100%;
    margin-right: 0px;
  }
  @media (max-width: 700px) {
    top: 120px;
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

// Catalog

export const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 116px;
  left: 40px;
  height: 80vh;
  padding: 42px;
  border-radius: 24px;
  @media (max-width: 900px) {
    top: 152px;
    left: 48px;
    right: 48px;
    padding: 42px 20px;
  }
  @media (max-width: 788px) {
    left: 20px;
    right: 20px;
    padding: 20px;
  }
  @media (max-width: 700px) {
    top: 195px;
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

export const StyledIconButtonMenu = styled(IconButton)`
  margin-right: 16px;
`;

export const StyledTitle = styled(Typography)`
  padding: 12px;
  font-size: 28px;
  font-weight: 500;
  @media (max-width: 664px) {
    font-size: 24px;
    color: #49beb7;
  }
`;

// MenuDesktop

export const StyledIconButton = styled(IconButton)`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const StyledItem = styled(Box)`
  min-width: 400px;
  border-radius: 28px;
  &:hover {
    background-color: #eeeeee;
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

// MenuMob

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

// MenuTouchpad

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

export const StyledTabs = styled(Tabs)`
  height: 100%;
  align-items: start;
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

export const StyledBox = styled(Box)`
  flex-grow: 1;
  display: flex;
  align-items: start;
`;

// SideBar

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
  }
  @media (max-width: 900px) {
    width: 278px;
  }
`;

// Search

export const Search = styled(Box)`
  flex-grow: 1;
  position: relative;
  margin-right: 32px;
  border-radius: 100px;
  height: 100%;
  @media (max-width: 700px) {
    position: absolute;
    top: 65px;
    width: 100%;
    height: 43px;
  }
`;

export const SearchIconWrapper = styled(Box)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    position: absolute;
    left: 0;
    top: 50%;
  }
`;

export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  color: theme.palette.secondary.main,
  borderRadius: '100px',
  height: '100%',
  [theme.breakpoints.down('lg')]: {
    height: '43px ',
    fontSize: '12px',
    '& .MuiInputLabel-root': {
      position: 'absolute',
      top: '-5px',
      left: '5px',
    },
    '& .MuiInputBase-input': {
      position: 'relative',
      top: '-7px',
    },
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '100px',
    border: 'none',
    height: '100%',
  },
}));
