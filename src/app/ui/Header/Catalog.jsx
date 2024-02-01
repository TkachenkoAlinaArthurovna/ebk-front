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

const Catalog = ({ openCatalog, handleCloseCatalog, catalog }) => {
  const [width] = useResize();
  const updatedCatalog = catalog.map((item) => ({
    ...item,
    children: catalog.filter((subItem) => subItem.parentId === item.id),
  }));
  const categories = updatedCatalog.filter((item) => !item.parentId);

  return (
    <>
      <Modal
        sx={{
          maxWidth: '1344px',
          height: '100%',
          margin: '0 auto',
        }}
        open={openCatalog}
        onClose={handleCloseCatalog}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openCatalog}>
          <StyledPaper papertype={width <= 1025 ? 'mob' : 'desktop'}>
            <Box
              sx={{
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
                  onClick={handleCloseCatalog}
                >
                  <CloseIcon />
                </StyledIconButton>
              </StyledWrapper>
              {width < 665 && (
                <MenuMob
                  handleCloseCatalog={handleCloseCatalog}
                  categories={categories}
                />
              )}
              {width <= 1025 && width >= 665 && (
                <MenuTouchpad
                  handleCloseCatalog={handleCloseCatalog}
                  categories={categories}
                />
              )}
              {width > 1025 && (
                <MenuDesktop
                  handleCloseCatalog={handleCloseCatalog}
                  categories={categories}
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
