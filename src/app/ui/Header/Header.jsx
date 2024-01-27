'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Content from '@/app/ui/Content/Content';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/material/Badge';
import logo from '../../../../public/images/logo.png';
import SearchComponent from '@/app/ui/Header/SearchComponent';
import Phones from '@/app/ui/Header/Phones';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import Catalog from '@/app/ui/Header/Catalog';
import SideBar from '@/app/ui/Header/SideBar';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ExpandLess from '@mui/icons-material/ExpandLess';
import { styled } from '@mui/material/styles';
import {
  StyledButtonCatalog,
  StyledPhoneBox,
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
    setAnchor(event.currentTarget.type);
  };
  const handleClosePhones = () => {
    setAnchor(null);
    setPhoneList(!phoneList);
  };

  const StyledListItemText = styled(ListItemText)`
    width: 149px;
    @media (max-width: 1100px) {
      display: none;
    }
  `;
  const StyledToolbar = styled(Toolbar)`
    display: flex;
    justifycontent: space-between;
  `;
  const StyledLink = styled(Link)`
    @media (max-width: 560px) {
      display: none;
    }
  `;
  const StyledBoxIcons = styled(Box)`
    @media (max-width: 560px) {
      width: 41px;
    }
  `;
  const StyledIconButton = styled(IconButton)`
    margin-right: 16px;
    @media (max-width: 560px) {
      margin-right: 0px;
    }
  `;
  const StyledMenuIcon = styled(MenuIcon)`
    @media (max-width: 560px) {
      // font-size: 24px;
      font-size: 16px;
      margin-right: 0;
    }
  `;
  const StyledLogoBox = styled(Box)`
    margin-right: 32px;
    @media (max-width: 560px) {
      margin-right: 12px;
    }
  `;
  const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
    // width: 24px;
    // height: 24px;
    color: #252a31;
    @media (max-width: 560px) {
      // font-size: 24px;
      font-size: 16px; 
    }
  `;
  const StyledBadge = styled(Badge)`
  @media (max-width: 560px) {
    
  }
  `

  return (
    <>
      <AppBar sx={{ padding: '26px 0' }} position="static" color="white">
        <Content>
          <StyledToolbar disableGutters>
            <StyledIconButton
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
            </StyledIconButton>
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
              <Phones
                handleClosePhones={handleClosePhones}
                anchor={anchor}
                phoneList={phoneList}
              />
            </StyledPhoneBox>

            <StyledBoxIcons
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '120px',
              }}
            >
              <StyledLink href="cabinet/favorites">
                <IconButton>
                  <Badge badgeContent={null} color="error">
                    <FavoriteBorderIcon
                      sx={{ width: '24px', height: '24px', color: '#252A31' }}
                    />
                  </Badge>
                </IconButton>
              </StyledLink>
              <Link href="/cart">
                <IconButton>
                  <StyledBadge badgeContent={null} color="error">
                    <StyledShoppingCartIcon
                    />
                  </StyledBadge>
                </IconButton>
              </Link>
              <StyledLink href="/cabinet">
                <IconButton>
                  <Badge badgeContent={null} color="error">
                    <PermIdentityIcon
                      sx={{ width: '24px', height: '24px', color: '#252A31' }}
                    />
                  </Badge>
                </IconButton>
              </StyledLink>
            </StyledBoxIcons>
          </StyledToolbar>
        </Content>
      </AppBar>
    </>
  );
};
export default Header;
