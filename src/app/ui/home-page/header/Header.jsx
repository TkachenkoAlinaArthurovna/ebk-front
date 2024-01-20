'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Content from '@/app/ui/Content';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/material/Badge';
import logo from '../../../../../public/images/logo.png';
import SearchComponent from '@/app/ui/home-page/header/SearchComponent';
import Phones from '@/app/ui/home-page/header/Phones';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import Catalog from '@/app/ui/home-page/header/Catalog';
import {
  ListItem,
  ListItemButton,
  Paper,
  Popover,
  Typography,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

const navigation = [
  { id: 1, title: 'Каталог товарів', path: '/catalog' },
  { id: 2, title: 'Кошик', path: '/cart' },
  { id: 3, title: 'Обране', path: '/favorive' },
  { id: 4, title: 'Компанія', path: '/about' },
  { id: 5, title: 'Про нас', path: '/about' },
  { id: 6, title: 'Контакти', path: '/contacts' },
  { id: 7, title: 'Відгуки', path: '/reviews' },
  { id: 8, title: 'Допомога', path: '/support' },
  { id: 9, title: 'Оплата та доставка', path: '/about' },
  { id: 10, title: 'Повернення товару', path: '/about' },
  { id: 11, title: 'Підтримка', path: '/about' },
];

const Header = () => {
  const [catalog, setCatalog] = useState(false);

  //   const { pathname } = useRouter();
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickCatalog = (event) => {
    setCatalog(!catalog);
    setAnchorEl(event.currentTarget);
  };

  const handleCloseCatalog = () => {
    setAnchorEl(null);
    setCatalog(!catalog);
  };
  const open = Boolean(anchorEl);

  return (
    <>
      <AppBar position="static" color="white">
        <Content>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            onClick={toggleDrawer}
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  margin: '28px 48px',
                }}
              >
                <Box>
                  <Button
                    sx={{ width: '180px', marginRight: '8px' }}
                    variant="contained"
                  >
                    Вхід
                  </Button>
                  <Button sx={{ width: '180px' }} variant="outlined">
                    Peєстрація
                  </Button>
                </Box>
                <Typography sx={{ color: 'grey', margin: '12px 0' }}>
                  Авторизуйтесь для отримання розширених можливостей
                </Typography>
              </Box>

              <List>
                {navigation.map(({ id, title, path }) => (
                  <ListItem key={title}>
                    <Link href={path}>
                      <ListItemText primary={title} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </IconButton>
          <Link href="/">
            <Image src={logo} component="button" alt="logo" />
          </Link>

          <Button
            onClick={handleClickCatalog}
            variant="contained"
            sx={{ margin: '0 32px' }}
          >
            Каталог {catalog ? <CloseIcon /> : <ExpandMore />}
          </Button>
          <Catalog
            open={open}
            anchorEl={anchorEl}
            handleCloseCatalog={handleCloseCatalog}
          />
          <SearchComponent />
          <Phones />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '220px',
              marginLeft: '32px',
            }}
          >
            <Link href="/favorite" sx={{}}>
              <Badge badgeContent={null} color="error">
                <FavoriteBorderIcon />
              </Badge>
            </Link>
            <Link href="/cart">
              <Badge badgeContent={5} color="error">
                <ShoppingCartIcon />
              </Badge>
            </Link>
            <Link href="/cabinet">
              <Badge badgeContent={null} color="error">
                <PermIdentityIcon />
              </Badge>
            </Link>
          </Box>
        </Toolbar>
        </Content>
      </AppBar>
    </>
  );
};
export default Header;
