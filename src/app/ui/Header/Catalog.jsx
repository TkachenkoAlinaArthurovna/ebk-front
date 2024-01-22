import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  List,
  Link,
  Popover,
  ListItemButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Modal,
  Fade,
  Backdrop,
  Button,
  Typography,
  Box,
} from '@mui/material';

import { StyledPaper, StyledList } from '@/app/ui/Header/HeaderStyles';
import { catalog } from '@/app/lib/mockData';

const categories = catalog.filter((item) => !item.parentId);

const Catalog = ({ openCatalog, handleCloseCatalog }) => {
  return (
    <>
      <Modal
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
          <StyledPaper>
            <StyledList disablePadding>
              {categories.map((item) => (
                <ListItemButton
                  key={item.id}
                  sx={{ width: '100%', fontSize: '16px' }}
                >
                  <ListItemText primary={item.name} />
                  <ListItemIcon>
                    <ArrowForwardIosIcon fontSize="small" sx={{ ml: 3 }} />
                  </ListItemIcon>
                </ListItemButton>
              ))}
            </StyledList>
          </StyledPaper>
        </Fade>
      </Modal>
    </>
  );
};

export default Catalog;
