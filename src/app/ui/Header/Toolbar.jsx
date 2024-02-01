import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addLinks } from '@/redux/slices/CategoriesSlice';
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
import ListItemButton from '@mui/material/ListItemButton';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ListItemText from '@mui/material/ListItemText';
import {
  StyledAccordion,
  StyledBoxPhones,
  StyledButtonCatalog,
  StyledToolbar,
  StyledLogoBox,
  StyledListItemText,
  StyledBoxIcons,
  StyledLinkFavorite,
  StyledLinkCabinet,
  StyledLinkCart,
  StyledShoppingCartIcon,
} from '@/app/ui/Header/HeaderStyles';
import CyrillicToTranslit from 'cyrillic-to-translit-js';

const Toolbar = ({ catalog }) => {
  const cyrillicToTranslit = new CyrillicToTranslit({ preset: 'uk' });
  const catalogLinks = catalog.map((item) => {
    const itemLink = cyrillicToTranslit
      .transform(`${item.name}`, '_')
      .toLowerCase();
    return { ...item, link: itemLink };
  });
  const dispatch = useDispatch();
  const categoriesLinks = useSelector(
    (state) => state.categories.categoriesLinks,
  );
  useEffect(() => {
    dispatch(addLinks(catalogLinks));
  }, []);

  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const [openCatalog, setOpen] = React.useState(false);
  const handleOpenCatalog = () => setOpen(true);
  const handleCloseCatalog = () => setOpen(false);
  return (
    <StyledToolbar disableGutters>
      <IconButtonMenu
        toggleDrawer={toggleDrawer}
        openDrawer={openDrawer}
        handleOpenCatalog={handleOpenCatalog}
      />
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
        catalog={catalogLinks}
      />
      <SearchComponent />
      <StyledBoxPhones component={'div'}>
        <StyledAccordion disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <ListItemButton
              sx={{ borderRadius: '100px' }}
              disableGutters
              href="tel:+380 63 32 95 468"
            >
              <LocalPhoneIcon sx={{ color: 'black', margin: '0 8px 0 8px' }} />
              <StyledListItemText primary="+380 63 32 95 468" />
            </ListItemButton>
          </AccordionSummary>
          <AccordionDetails>
            <ListItemButton
              sx={{ borderRadius: '100px' }}
              href="tel:+380 72 58 58 445"
            >
              <LocalPhoneIcon sx={{ color: 'black', margin: '0 4px 0 0' }} />
              <ListItemText primary="+380 72 58 58 445" />
            </ListItemButton>
            <ListItemButton
              sx={{ borderRadius: '100px' }}
              href="tel:+380 72 58 58 445"
            >
              <LocalPhoneIcon sx={{ color: 'black', margin: '0 4px 0 0' }} />
              <ListItemText primary="+380 72 58 58 445" />
            </ListItemButton>
            <ListItemButton
              sx={{ borderRadius: '100px' }}
              href="tel:+380 72 58 58 445"
            >
              <LocalPhoneIcon sx={{ color: 'black', margin: '0 4px 0 0' }} />
              <ListItemText primary="+380 72 58 58 445" />
            </ListItemButton>
          </AccordionDetails>
        </StyledAccordion>
      </StyledBoxPhones>
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