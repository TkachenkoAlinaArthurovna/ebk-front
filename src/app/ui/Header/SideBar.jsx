import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
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
import Logo from '@/app/ui/Logo/Logo';
import { useAuth } from '@/redux/contexts/AuthContext';

const navigationMain = [
  { id: 5, title: 'Про нас', path: '/about' },
  { id: 11, title: 'Підтримка', path: '/support' },
  { id: 9, title: 'Доставка і оплата', path: '/payment-delivery' },
  { id: 6, title: 'Контакти', path: '/contacts' },
  // { id: 7, title: 'Відгуки', path: '/reviews' },
];

const SideBar = ({
  toggleDrawer,
  openDrawer,
  handleOpenCatalog,
  handleOpenAuthModal,
}) => {
  const { isAuthorized } = useAuth();
  const authorized = isAuthorized();
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const userCartProducts = useSelector(
    (state) => state.userCart.userCartProducts,
  );
  const favorites = useSelector((state) => state.favorites.favorites);

  const handleOpenAuthModalStub = () => {
    handleOpenAuthModal(true);
  };

  return (
    <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
      <StyledSideBarContainer onClick={(e) => e.stopPropagation()}>
        <Box sx={{ position: 'relative', width: '120px', height: '40px' }}>
          <Logo color={'rgba(0, 0, 0, 0.54)'} width={'100%'} height={'100%'} />
        </Box>
        <IconButton
          onClick={toggleDrawer}
          sx={{ position: 'absolute', top: '20px', right: '24px' }}
        >
          <CloseIcon />
        </IconButton>

        {!isAuthorized() && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                margin: '12px 0',
              }}
            >
              <StyledButtonSideBar
                variant="contained"
                onClick={handleOpenAuthModalStub}
              >
                Вхід
              </StyledButtonSideBar>
            </Box>
            <Typography sx={{ fontSize: '14px', color: 'grey' }}>
              Авторизуйтесь для отримання розширених можливостей
            </Typography>
          </Box>
        )}

        <Box sx={{ marginTop: '24px' }}>
          <ListItem disablePadding>
            <ListItemButton
              sx={{ padding: '10px 24px 10px 16px', borderRadius: '28px' }}
              disableGutters
              onClick={() => {
                handleOpenCatalog();
                toggleDrawer();
              }}
            >
              <MenuIcon
                sx={{ width: '20px', height: '20px', marginRight: '12px' }}
              />
              <ListItemText primary="Каталог товарів" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              sx={{ padding: '10px 24px 10px 16px', borderRadius: '28px' }}
              disableGutters
              href={'/cart'}
            >
              <ShoppingCartIcon
                sx={{ width: '20px', height: '20px', marginRight: '12px' }}
              />

              <ListItemText primary={'Кошик'} />
              <Typography>
                {authorized ? userCartProducts.length : cartProducts.length}
              </Typography>
            </ListItemButton>
          </ListItem>
          {isAuthorized() && (
            <ListItem disablePadding>
              <ListItemButton
                sx={{ padding: '10px 24px 10px 16px', borderRadius: '28px' }}
                disableGutters
                href={'/cabinet/favorites'}
              >
                <FavoriteBorderIcon
                  sx={{ width: '20px', height: '20px', marginRight: '12px' }}
                />

                <ListItemText primary={'Обране'} />

                <Typography>{favorites.length}</Typography>
              </ListItemButton>
            </ListItem>
          )}
          {navigationMain.map(({ id, title, path }) => (
            <ListItem key={id} disablePadding>
              <ListItemButton
                sx={{ padding: '10px 24px 10px 16px', borderRadius: '28px' }}
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
};

export default SideBar;
