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
import { styled, alpha } from '@mui/material/styles';

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

  const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
    color: 'inherit',
    '&:hover': {
      backgroundColor: alpha(theme.palette.white.main, 1),
    },
  }));

  return (
    <>
      <AppBar sx={{ padding: '26px 0' }} position="static" color="white">
        <Content>
          <Toolbar
            disableGutters
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <IconButton
              onClick={toggleDrawer}
              color="inherit"
              edge="start"
              sx={{ marginRight: '16px' }}
            >
              <MenuIcon fontSize="large" />
              <SideBar
                toggleDrawer={toggleDrawer}
                openDrawer={openDrawer}
                handleOpenCatalog={handleOpenCatalog}
              />
            </IconButton>
            <Box sx={{ marginRight: '32px' }}>
              <Link href="/">
                <Image src={logo} component="button" alt="logo" />
              </Link>
            </Box>
            <Button
              onClick={handleOpenCatalog}
              variant="contained"
              endIcon={openCatalog ? <CloseIcon /> : <ExpandMore />}
              sx={{
                width: '138px',
                height: '56px',
                marginRight: '32px',
                boxSizing: 'border-box',
              }}
            >
              Каталог
            </Button>
            <Catalog
              openCatalog={openCatalog}
              handleCloseCatalog={handleCloseCatalog}
            />
            <SearchComponent />
            <Box
              sx={{
                position: 'relative',
                minWidth: '240px',
                marginRight: '32px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <StyledListItemButton href="tel:+380 63 32 95 468">
                <LocalPhoneIcon sx={{ color: 'black', marginRight: 1 }} />
                <ListItemText primary="+380 63 32 95 468" />
              </StyledListItemButton>
              <IconButton onClick={handleClickPones}>
                {phoneList ? (
                  <ExpandLess sx={{ color: 'black' }} />
                ) : (
                  <ExpandMore sx={{ color: 'black' }} />
                )}
              </IconButton>
              <Phones
                handleClosePhones={handleClosePhones}
                anchor={anchor}
                phoneList={phoneList}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '120px',
              }}
            >
              <Link href="cabinet/favorites">
                <IconButton>
                  <Badge badgeContent={null} color="error">
                    <FavoriteBorderIcon
                      sx={{ width: '24px', height: '24px', color: '#252A31' }}
                    />
                  </Badge>
                </IconButton>
              </Link>
              <Link href="/cart">
                <IconButton>
                  <Badge badgeContent={5} color="error">
                    <ShoppingCartIcon
                      sx={{ width: '24px', height: '24px', color: '#252A31' }}
                    />
                  </Badge>
                </IconButton>
              </Link>
              <Link href="/cabinet">
                <IconButton>
                  <Badge badgeContent={null} color="error">
                    <PermIdentityIcon
                      sx={{ width: '24px', height: '24px', color: '#252A31' }}
                    />
                  </Badge>
                </IconButton>
              </Link>
            </Box>
          </Toolbar>
        </Content>
      </AppBar>
    </>
  );
};
export default Header;
