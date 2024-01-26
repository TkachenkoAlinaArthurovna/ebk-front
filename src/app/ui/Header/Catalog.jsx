import { Modal, Fade, Backdrop, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  StyledPaper,
  StyledWrapper,
  StyledIconButton,
  StyledTitle,
} from '@/app/ui/Header/HeaderStyles';
import PageTitle from '@/app/ui/PageTitle';
import MobMenu from '@/app/ui/Header/MobMenu';
import Menu from '@/app/ui/Header/Menu';
import { catalog } from '@/app/lib/mockData';
import { useResize } from '@/app/lib/helpers';

const Catalog = ({ openCatalog, handleCloseCatalog }) => {
  const [width] = useResize();

  return (
    <>
      <Modal
        sx={{
          maxWidth: '1344px',
          height: '100%',
          margin: '0 auto',
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            width: '0 !important',
          },
          scrollbarWidth: 'none',
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
            <StyledWrapper>
              <StyledTitle>Каталог товарів</StyledTitle>
              <StyledIconButton
                closetype={width <= 1025 ? 'mob' : 'desktop'}
                onClick={handleCloseCatalog}
              >
                <CloseIcon />
              </StyledIconButton>
            </StyledWrapper>
            {width <= 1025 && (
              <MobMenu handleCloseCatalog={handleCloseCatalog} />
            )}
            {width > 1025 && <Menu handleCloseCatalog={handleCloseCatalog} />}
          </StyledPaper>
        </Fade>
      </Modal>
    </>
  );
};

export default Catalog;
