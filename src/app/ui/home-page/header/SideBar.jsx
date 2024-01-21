import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';

const navigation = [
  { id: 2, title: 'Кошик', path: '/cart' },
  { id: 3, title: 'Обране', path: '/favorite' },
  { id: 4, title: 'Компанія', path: '/about' },
  { id: 5, title: 'Про нас', path: '/about' },
  { id: 6, title: 'Контакти', path: '/contacts' },
  { id: 7, title: 'Відгуки', path: '/reviews' },
];
const navigation2 = [
  { id: 8, title: 'Допомога', path: '/support' },
  { id: 9, title: 'Оплата та доставка', path: '/about' },
  { id: 10, title: 'Повернення товару', path: '/about' },
  { id: 11, title: 'Підтримка', path: '/about' },
];

const SideBar = ({ toggleDrawer, openDrawer, handleOpenCatalog }) => (
  <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
    <Box sx={{ padding: '28px 24px 28px 48px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
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
        <Typography
          sx={{ color: 'grey', width: '360px', margin: '12px 0 24px' }}
        >
          Авторизуйтесь для отримання розширених можливостей
        </Typography>
      </Box>
      <Box>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ padding: '12px 24px' }}
            disableGutters
            onClick={handleOpenCatalog}
          >
            <MenuIcon sx={{ paddingRight: '12px' }} />
            <ListItemText primary="Каталог товарів" />
          </ListItemButton>
        </ListItem>
        {navigation.map(({ id, title, path }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton
              sx={{ padding: '12px 24px' }}
              disableGutters
              href={path}
            >
              {path === '/catalog' ? (
                <MenuIcon sx={{ paddingRight: '12px' }} />
              ) : null}
              {path === '/cart' ? (
                <ShoppingCartIcon sx={{ paddingRight: '12px' }} />
              ) : null}
              {path === '/favorite' ? (
                <FavoriteBorderIcon sx={{ paddingRight: '12px' }} />
              ) : null}

              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
        {navigation2.map(({ id, title, path }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton
              sx={{ padding: '12px 24px' }}
              disableGutters
              href={path}
            >
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </Box>
      <Divider />
    </Box>
  </Drawer>
);

export default SideBar;
