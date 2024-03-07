'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuModal } from '@/redux/slices/MenuModalSlice';
import { setCatalogLinks } from '@/redux/slices/CatalogLinksSlice';
import { setFavorites } from '@/redux/slices/FavoritesSlice';
import Link from 'next/link';
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
import { createLinks } from '@/app/lib/createLinks';
import Phones from '@/app/ui/Header/Phones';
import Logo from '@/app/ui/Logo/Logo';
import { useAuth } from '@/redux/contexts/AuthContext';
import Account from '@/app/ui/Header/Account';
import { openAuthModal } from '@/redux/slices/AuthModalSlice';
import { transformItemsArray } from '@/app/lib/transformItemsArray';
import { postCart } from '@/app/lib/postCart';
import { getCart } from '@/app/lib/getCart';
import { deleteCartProduct } from '@/app/lib/deleteCartProduct';
import { addCartProduct } from '@/app/lib/addCartProduct';

const Toolbar = ({ catalog }) => {
  const { isAuthorized, getUser } = useAuth();
  const authorized = isAuthorized();
  const user = authorized ? getUser() : null;
  const token = authorized ? localStorage.getItem('token') : null;
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const catalogLinks = createLinks(catalog.items);
  const favorites = useSelector((state) => state.favorites.favorites);

  const getAllFavorites = async (userId, token) => {
    try {
      const url = `https://stage.eco-bike.com.ua/api/favorites/user/${userId}`;
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (res.ok) {
        const data = await res.json();
        if (data) {
          dispatch(setFavorites(data));
        }
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (authorized) {
      const favorites = getAllFavorites(user.id, token);
    }
  }, [authorized]);

  useEffect(() => {
    if (authorized) {
      // if(cartProducts.length !== 0) {
      //   cartProducts.map((product) => {
      //     addCartProduct(token, product._id);
      //   })
      // }
      // const transformCartProducts = transformItemsArray(cartProducts);
      // postCart(token, transformCartProducts);
      // getCart(token);
      // deleteCartProduct(token, '65e7cf1bbcd8f75ff3f1f99a');
      // addCartProduct(token, '65e92094bcd8f75ff3f2964a');
      // console.log('done');
    }
  }, [authorized]);

  useEffect(() => {
    dispatch(setCatalogLinks(catalogLinks));
  }, [catalogLinks]);

  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const isOpenModalMenu = useSelector(
    (state) => state.menuModal.isOpenModalMenu,
  );

  const toggleOpenCatalog = () => dispatch(toggleMenuModal());

  const handleOpenAuthModal = () => dispatch(openAuthModal());

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
            <Badge badgeContent={cartProducts.length} color="primary">
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
