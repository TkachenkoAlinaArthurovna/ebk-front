'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Content from '@/app/ui/Content/Content';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/material/Badge';
import logo from '../../../../public/images/logo.png';
import SearchComponent from '@/app/ui/Header/SearchComponent';
import Phones from '@/app/ui/Header/Phones';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import Catalog from '@/app/ui/Header/Catalog';
import SideBar from '@/app/ui/Header/SideBar';
import ListItemButton from '@mui/material/ListItemButton';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ExpandLess from '@mui/icons-material/ExpandLess';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Paper from '@mui/material/Paper';
import ListItemText from '@mui/material/ListItemText';
import { Popover } from '@mui/material';
import {
  StyledButtonCatalog,
  StyledPhoneBox,
  StyledAppBar,
  StyledToolbar,
  StyledIconButtonMenu,
  StyledMenuIcon,
  StyledLogoBox,
  StyledListItemText,
  StyledBoxIcons,
  StyledLinkFavorite,
  StyledLinkCabinet,
  StyledLinkCart,
  StyledShoppingCartIcon,
} from '@/app/ui/Header/HeaderStyles';

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const [openCatalog, setOpen] = React.useState(false);
  const handleOpenCatalog = () => setOpen(true);
  const handleCloseCatalog = () => setOpen(false);

  const [phoneList, setPhoneList] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const handleClickPones = (event) => {
    setPhoneList(!phoneList);
    setAnchor(event.currentTarget);
  };
  const handleClosePhones = () => {
    setAnchor(null);
    setPhoneList(!phoneList);
  };

  const openPhones = Boolean(anchor);
  const id = openPhones ? 'simple-popover' : undefined;

  return (
    <>
      <StyledAppBar position="static" color="white">
        <Content>
          <StyledToolbar disableGutters>
            <StyledIconButtonMenu
              onClick={toggleDrawer}
              color="inherit"
              edge="start"
              sx={{ marginRight: '16px' }}
            >
              <StyledMenuIcon fontSize="large" />
              <SideBar
                toggleDrawer={toggleDrawer}
                openDrawer={openDrawer}
                handleOpenCatalog={handleOpenCatalog}
              />
            </StyledIconButtonMenu>
            <StyledLogoBox>
              <Link href="/">
                <Image priority={true} src={logo} alt="logo" />
              </Link>
            </StyledLogoBox>
            <StyledButtonCatalog
              onClick={handleOpenCatalog}
              variant="contained"
              endIcon={openCatalog ? <CloseIcon /> : <ExpandMore />}
            >
              Каталог
            </StyledButtonCatalog>
            <Catalog
              openCatalog={openCatalog}
              handleCloseCatalog={handleCloseCatalog}
            />
            <SearchComponent />
            <StyledPhoneBox>
              <ListItemButton disableGutters href="tel:+380 63 32 95 468">
                <LocalPhoneIcon sx={{ color: 'black', marginRight: 1 }} />
                <StyledListItemText primary="+380 63 32 95 468" />
              </ListItemButton>
              <IconButton onClick={handleClickPones}>
                {phoneList ? (
                  <ExpandLess sx={{ color: 'black', padding: 0 }} />
                ) : (
                  <ExpandMore sx={{ color: 'black' }} />
                )}
              </IconButton>
              <Popover
                id={id}
                open={openPhones}
                onClose={handleClosePhones}
                anchorOrigin={{
                  vertical: 80,
                  horizontal: 1030,
                }}
                // transformOrigin={{
                //   vertical: 'top',
                //   horizontal: 'center',
                // }}
              >
                <Paper sx={{ width: '170px' }}>
                  <ListItemButton href="tel:+380 72 58 58 445">
                    <ListItemText primary="+380 72 58 58 445" />
                  </ListItemButton>
                  <ListItemButton href="tel:+380 72 58 58 445">
                    <ListItemText primary="+380 72 58 58 445" />
                  </ListItemButton>
                  <ListItemButton href="tel:+380 72 58 58 445">
                    <ListItemText primary="+380 72 58 58 445" />
                  </ListItemButton>
                </Paper>
              </Popover>

              {/* <Phones
                handleClosePhones={handleClosePhones}
                anchor={anchor}
                phoneList={phoneList}
              /> */}
            </StyledPhoneBox>
            <StyledBoxIcons>
              <StyledLinkFavorite href="cabinet/favorites">
                <IconButton>
                  <Badge badgeContent={null} color="error">
                    <FavoriteBorderIcon
                      sx={{ width: '24px', height: '24px', color: '#252A31' }}
                    />
                  </Badge>
                </IconButton>
              </StyledLinkFavorite>
              <StyledLinkCart href="/cart">
                <IconButton>
                  <Badge badgeContent={5} color="error">
                    <StyledShoppingCartIcon />
                  </Badge>
                </IconButton>
              </StyledLinkCart>
              <StyledLinkCabinet href="/cabinet">
                <IconButton>
                  <Badge badgeContent={null} color="error">
                    <PermIdentityIcon
                      sx={{ width: '24px', height: '24px', color: '#252A31' }}
                    />
                  </Badge>
                </IconButton>
              </StyledLinkCabinet>
            </StyledBoxIcons>
          </StyledToolbar>
        </Content>
      </StyledAppBar>
    </>
  );
};
export default Header;
