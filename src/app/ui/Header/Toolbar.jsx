'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { createLinks } from '@/app/lib/createLinks';
import { getCart } from '@/app/lib/getCart';
import { addCartProduct } from '@/app/lib/addCartProduct';
import { getAllFavorites } from '@/app/lib/getAllFavorites';
import { getUserObj } from '@/app/lib/getUserObj';
import { getUserOrders } from '@/app/lib/getUserOrders';

import { toggleMenuModal } from '@/redux/slices/MenuModalSlice';
import { setCatalogLinks } from '@/redux/slices/CatalogLinksSlice';
import { setFavorites } from '@/redux/slices/FavoritesSlice';
import { setFavoritesMeta } from '@/redux/slices/FavoritesSlice';
import { setOrders } from '@/redux/slices/UserOrdersSlice';
import { toggleCart } from '@/redux/slices/CartSlice';
import {
  setFirstname,
  setSurname,
  setPhone,
  setEmail,
} from '@/redux/slices/UserInfoSlice';
import { setUserCartProducts } from '@/redux/slices/UserCartSlice';
import { useAuth } from '@/redux/contexts/AuthContext';
import { openAuthModal } from '@/redux/slices/AuthModalSlice';
import { setLoading } from '@/redux/slices/LoadingSlice';

import IconButtonMenu from '@/app/ui/Header/IconButtonMenu';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/material/Badge';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import Catalog from '@/app/ui/Header/Catalog';
import SearchNew from '@/app/ui/Header/SearchNew';
import {
  StyledButtonCatalog,
  StyledToolbar,
  StyledLogoBox,
  StyledBoxIcons,
  StyledLinkFavorite,
  StyledLinkCart,
  StyledShoppingCartIcon,
} from '@/app/ui/Header/HeaderStyles';
import Phones from '@/app/ui/Header/Phones';
import Logo from '@/app/ui/Logo/Logo';
import Account from '@/app/ui/Header/Account';

const Toolbar = () => {
  const { isAuthorized, getUser } = useAuth();
  const authorized = isAuthorized();
  const user = authorized ? getUser() : null;
  const token = authorized ? localStorage.getItem('token') : null;

  const dispatch = useDispatch();
  const catalogLinks = useSelector((state) => state.catalogLinks.catalogLinks);
  const userCartProducts = useSelector(
    (state) => state.userCart.userCartProducts,
  );
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const favorites = useSelector((state) => state.favorites.favorites);
  const userPhone = useSelector((state) => state.user.phone);
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const isOpenModalMenu = useSelector(
    (state) => state.menuModal.isOpenModalMenu,
  );
  const toggleOpenCatalog = () => dispatch(toggleMenuModal());
  const handleOpenAuthModal = () => dispatch(openAuthModal());

  useEffect(() => {
    dispatch(setCatalogLinks([]));
    const getCategories = async () => {
      try {
        const response = await fetch(
          'https://stage.eco-bike.com.ua/api/categories',
          {
            next: { revalidate: 3600 },
          },
        );
        if (response.ok) {
          const data = await response.json();
          dispatch(setCatalogLinks(createLinks(data.items)));
        } else {
          throw new Error('Ошибка при загрузке категорий');
        }
      } catch (error) {
        console.error('Произошла ошибка:', error);
      }
    };

    getCategories();
  }, []);

  useEffect(() => {
    if (authorized) {
      getAllFavorites(user.id, token, setFavorites, setFavoritesMeta, dispatch);
      getUserObj(
        token,
        user,
        setFirstname,
        setSurname,
        setPhone,
        setEmail,
        dispatch,
      );
      if (cartProducts.length !== 0) {
        cartProducts.map((product) => {
          addCartProduct(token, product.crmId);
          dispatch(toggleCart({ currentCard: product, action: 'remove' }));
        });
      }
    } else {
      dispatch(setFirstname(''));
      dispatch(setSurname(''));
      dispatch(setPhone(''));
      dispatch(setEmail(''));
    }
  }, [authorized]);

  useEffect(() => {
    if (userPhone && token) {
      getUserOrders(token, userPhone, setOrders, dispatch);
    }
  }, [userPhone, token]);

  useEffect(() => {
    if (authorized && token) {
      if (cartProducts.length == 0) {
        getCart(token, setUserCartProducts, dispatch, setLoading);
      }
    }
  }, [authorized, cartProducts]);

  return (
    <StyledToolbar disableGutters>
      <IconButtonMenu
        toggleDrawer={toggleDrawer}
        openDrawer={openDrawer}
        handleOpenCatalog={toggleOpenCatalog}
        handleOpenAuthModal={handleOpenAuthModal}
      />
      <Link href="/">
        <StyledLogoBox>
          <Logo color={'#000'} width={'100%'} height={'100%'} />
        </StyledLogoBox>
      </Link>
      <StyledButtonCatalog
        onClick={toggleOpenCatalog}
        variant="contained"
        endIcon={isOpenModalMenu ? <CloseIcon /> : <ExpandMore />}
      >
        Каталог
      </StyledButtonCatalog>
      <Catalog catalog={catalogLinks} />

      <SearchNew />
      <Phones />
      <StyledBoxIcons>
        {authorized && (
          <StyledLinkFavorite href="/cabinet/favorites">
            <IconButton>
              <Badge badgeContent={favorites.length} color="primary">
                <FavoriteBorderIcon
                  sx={{ width: '24px', height: '24px', color: '#252A31' }}
                />
              </Badge>
            </IconButton>
          </StyledLinkFavorite>
        )}
        <StyledLinkCart href="/cart">
          <IconButton>
            <Badge
              badgeContent={
                authorized ? userCartProducts.length : cartProducts.length
              }
              color="primary"
            >
              <StyledShoppingCartIcon />
            </Badge>
          </IconButton>
        </StyledLinkCart>
        <Account handleOpenAuthModal={handleOpenAuthModal} />
      </StyledBoxIcons>
    </StyledToolbar>
  );
};

export default Toolbar;
