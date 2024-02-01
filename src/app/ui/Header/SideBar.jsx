import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {
  StyledButtonSideBar,
  StyledSideBarContainer,
} from '@/app/ui/Header/HeaderStyles';

const navigation = [
  { id: 2, title: 'Кошик', path: '/cart' },
  { id: 3, title: 'Обране', path: 'cabinet/favorites' },
];

const navigation1 = [
  { id: 5, title: 'Про нас', path: '/about' },
  { id: 6, title: 'Контакти', path: '/contacts' },
  { id: 7, title: 'Відгуки', path: '/reviews' },
];

const navigation2 = [
  { id: 9, title: 'Доставка і оплата', path: '/payment-delivery' },
  { id: 11, title: 'Підтримка', path: '/support' },
];

const SideBar = ({ toggleDrawer, openDrawer, handleOpenCatalog }) => (
  <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
    <StyledSideBarContainer>
      <Box sx={{ position: 'relative', width: '156px', height: '56px' }}>
        <Box
          component={'img'}
          src={'/images/logo.png'}
          style={{
            width: '100%',
          }}
        ></Box>
      </Box>
      <IconButton
        onClick={toggleDrawer}
        sx={{ position: 'absolute', top: '16px', right: '16px' }}
      >
        <CloseIcon />
      </IconButton>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          marginBottom: '24px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '12px',
          }}
        >
          <StyledButtonSideBar variant="contained">Вхід</StyledButtonSideBar>
          <StyledButtonSideBar variant="outlined" typebutton="registration">
            Peєстрація
          </StyledButtonSideBar>
        </Box>
        <Typography sx={{ fontSize: '14px', color: 'grey' }}>
          Авторизуйтесь для отримання розширених можливостей
        </Typography>
      </Box>
      <Box>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ padding: '16px', borderRadius: '28px' }}
            disableGutters
            onClick={handleOpenCatalog}
          >
            <MenuIcon
              sx={{ width: '20px', height: '20px', marginRight: '12px' }}
            />
            <ListItemText primary="Каталог товарів" />
          </ListItemButton>
        </ListItem>
        {navigation.map(({ id, title, path }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton
              sx={{ padding: '16px 24px 16px 16px', borderRadius: '28px' }}
              disableGutters
              href={path}
            >
              {path === '/cart' ? (
                <ShoppingCartIcon
                  sx={{ width: '20px', height: '20px', marginRight: '12px' }}
                />
              ) : null}
              {path === 'cabinet/favorites' ? (
                <FavoriteBorderIcon
                  sx={{ width: '20px', height: '20px', marginRight: '12px' }}
                />
              ) : null}
              <ListItemText primary={title} />
              {path === '/cart' ? <Typography>{id}</Typography> : null}
              {path === 'cabinet/favorites' ? (
                <Typography>{id}</Typography>
              ) : null}
            </ListItemButton>
          </ListItem>
        ))}
        <Divider sx={{ marginTop: '4px' }} />
        <Typography
          sx={{ padding: '16px 24px 16px 16px', fontWeight: '500' }}
          component="div"
        >
          Компанія
        </Typography>
        {navigation1.map(({ id, title, path }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton
              sx={{ padding: '16px 24px 16px 16px', borderRadius: '28px' }}
              disableGutters
              href={path}
            >
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider sx={{ marginTop: '4px' }} />
        <Typography
          sx={{ padding: '16px 24px 16px 16px', fontWeight: '500' }}
          component="div"
        >
          Допомога
        </Typography>
        {navigation2.map(({ id, title, path }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton
              sx={{ padding: '16px 24px 16px 16px', borderRadius: '28px' }}
              disableGutters
              href={path}
            >
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </Box>
    </StyledSideBarContainer>
  </Drawer>
);

export default SideBar;
