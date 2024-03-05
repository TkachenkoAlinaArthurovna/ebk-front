import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuModal } from '@/redux/slices/MenuModalSlice';
import { Modal, Fade, Backdrop, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  StyledPaper,
  StyledWrapper,
  StyledIconButton,
  StyledTitle,
} from '@/app/ui/Header/HeaderStyles';
import MenuDesktop from '@/app/ui/Header/MenuDesktop';
import MenuTouchpad from '@/app/ui/Header/MenuTouchpad';
import MenuMob from '@/app/ui/Header/MenuMob';
import { useResize } from '@/app/lib/helpers';

const Catalog = ({ catalog }) => {
  const isOpenModalMenu = useSelector(
    (state) => state.menuModal.isOpenModalMenu,
  );
  const dispatch = useDispatch();
  const toggleCatalog = () => dispatch(toggleMenuModal());

  const [width, height] = useResize();
  const updatedCatalog = catalog.map((item) => ({
    ...item,
    children: catalog.filter((subItem) => subItem.parentId === item.id),
  }));
  const categories = updatedCatalog.filter((item) => !item.parentId);
  const heightMenu = 162 + 48 * categories.length;
  return (
    <>
      <Modal
        sx={{
          maxWidth: '1344px',
          height: '100%',
          margin: '0 auto',
        }}
        open={isOpenModalMenu}
        onClose={toggleCatalog}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isOpenModalMenu}>
          <StyledPaper
            papertype={width <= 1025 ? 'mob' : 'desktop'}
            sx={
              height > 640
                ? {
                    '@media(min-width: 1025px)': {
                      height: `${heightMenu}px`,
                    },
                  }
                : {
                    '@media(min-width: 1025px)': {
                      bottom: '10px',
                    },
                  }
            }
          >
            <Box
              sx={{
                height: '100%',
                overflow: 'auto',
                '&::-webkit-scrollbar': {
                  width: '0 !important',
                },
                scrollbarWidth: 'none',
              }}
            >
              <StyledWrapper>
                <StyledTitle>Каталог товарів</StyledTitle>
                <StyledIconButton
                  closetype={width <= 1025 ? 'mob' : 'desktop'}
                  onClick={toggleCatalog}
                >
                  <CloseIcon />
                </StyledIconButton>
              </StyledWrapper>
              {width < 665 && (
                <MenuMob
                  handleCloseCatalog={toggleCatalog}
                  categories={categories}
                />
              )}
              {width <= 1025 && width >= 665 && (
                <MenuTouchpad
                  handleCloseCatalog={toggleCatalog}
                  categories={categories}
                />
              )}
              {width > 1025 && height <= heightMenu + 140 && (
                <MenuMob
                  handleCloseCatalog={toggleCatalog}
                  categories={categories}
                />
              )}
              {width > 1025 && height > heightMenu + 140 && (
                <MenuDesktop
                  handleCloseCatalog={toggleCatalog}
                  categories={categories}
                  heightMenu={heightMenu}
                />
              )}
            </Box>
          </StyledPaper>
        </Fade>
      </Modal>
    </>
  );
};

export default Catalog;
