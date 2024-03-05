'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuModal } from '@/redux/slices/MenuModalSlice';
import { setCatalogLinks } from '@/redux/slices/CatalogLinksSlice';
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
import Authorization from '@/app/ui/Header/AuthModal/Authorization';
import Account from '@/app/ui/Header/Account';

const Toolbar = ({ catalog }) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const catalogLinks = createLinks(catalog.items);
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

  const [isStub, setIsStub] = useState(false);

  const [openAuthModal, setOpenAuth] = React.useState(false);
  const handleOpenAuthModal = (isStub) => {
    setIsStub(isStub);
    setOpenAuth(true);
  };
  const handleCloseAuthModal = () => setOpenAuth(false);

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
      <Authorization
        isOpen={openAuthModal}
        handleClose={handleCloseAuthModal}
        isStub={isStub}
      />
      <SearchNew />
      <Phones />
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
