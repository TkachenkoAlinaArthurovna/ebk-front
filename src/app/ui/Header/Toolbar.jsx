'use client';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuModal } from '@/redux/slices/MenuModalSlice';
import Link from 'next/link';
import IconButtonMenu from '@/app/ui/Header/IconButtonMenu';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/material/Badge';
import logo from '../../../../public/images/logo.png';
import SearchComponent from '@/app/ui/Header/SearchComponent';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import Catalog from '@/app/ui/Header/Catalog';
import {
  StyledButtonCatalog,
  StyledToolbar,
  StyledLogoBox,
  StyledBoxIcons,
  StyledLinkFavorite,
  StyledLinkCabinet,
  StyledLinkCart,
  StyledShoppingCartIcon,
} from '@/app/ui/Header/HeaderStyles';
import { createLinks } from '@/app/lib/createLinks';
import Phones from '@/app/ui/Header/Phones';

const Toolbar = ({ catalog }) => {
  const catalogLinks = createLinks(catalog);

  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const isOpenModalMenu = useSelector(
    (state) => state.menuModal.isOpenModalMenu,
  );
  const dispatch = useDispatch();
  const toggleOpenCatalog = () => dispatch(toggleMenuModal());

  return (
    <StyledToolbar disableGutters>
      <IconButtonMenu
        toggleDrawer={toggleDrawer}
        openDrawer={openDrawer}
        handleOpenCatalog={toggleOpenCatalog}
      />
      <StyledLogoBox>
        <Link href="/">
          <Image priority={true} src={logo} alt="logo" />
        </Link>
      </StyledLogoBox>
      <StyledButtonCatalog
        onClick={toggleOpenCatalog}
        variant="contained"
        endIcon={isOpenModalMenu ? <CloseIcon /> : <ExpandMore />}
      >
        Каталог
      </StyledButtonCatalog>
      <Catalog catalog={catalogLinks} />
      <SearchComponent />
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
  );
};

export default Toolbar;
