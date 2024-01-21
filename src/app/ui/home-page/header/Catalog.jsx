import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  Paper,
  ListItemButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Modal,
  Fade,
  List,
  Backdrop,
  Button,
  Typography,
  Box,
} from '@mui/material';

const stylePaper = {
  display: 'flex',

  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '24px',
  boxShadow: 24,
  p: 4,
};
const flexColumn = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};
const stylesListItemButton = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '100px',
  width: '310px',
};
const Catalog = ({ openCatalog, handleCloseCatalog }) => (
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
        <Paper sx={stylePaper}>
          <List sx={flexColumn} disablePadding>
            <ListItemButton sx={stylesListItemButton}>
              <ListItemText primary="Електро-велосипеди" />
              <ListItemIcon>
                <ArrowForwardIosIcon fontSize="small" sx={{ ml: 3 }} />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={stylesListItemButton}>
              <ListItemText primary="Електро-велокомплекти" />
              <ListItemIcon>
                <ArrowForwardIosIcon fontSize="small" sx={{ ml: 3 }} />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={stylesListItemButton}>
              <ListItemText primary="Мотор та мотор-колеса" />
              <ListItemIcon>
                <ArrowForwardIosIcon fontSize="small" sx={{ ml: 3 }} />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={stylesListItemButton}>
              <ListItemText primary="Електро-велосипеди" />
              <ListItemIcon>
                <ArrowForwardIosIcon fontSize="small" sx={{ ml: 3 }} />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={stylesListItemButton}>
              <ListItemText primary="Електро-велосипеди" />
              <ListItemIcon>
                <ArrowForwardIosIcon fontSize="small" sx={{ ml: 3 }} />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={stylesListItemButton}>
              <ListItemText primary="Електро-велосипеди" />
              <ListItemIcon>
                <ArrowForwardIosIcon fontSize="small" sx={{ ml: 3 }} />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton sx={stylesListItemButton}>
              <ListItemText primary="Електро-велосипеди" />
              <ListItemIcon>
                <ArrowForwardIosIcon fontSize="small" sx={{ ml: 3 }} />
              </ListItemIcon>
            </ListItemButton>
          </List>
          {/* сделать модалку + поповер */}
          <Grid
            container
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridAutoRows: '1fr',
              gap: '20px',
            }}
          >
            <ListItem
              sx={{
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'flex-start',
                flexDirection: 'column',
              }}
            >
              <Typography color="primary">Велосипеди</Typography>
              <List>
                <ListItemText sx={{ whiteSpace: 'nowrap' }}>
                  Електро-велосипеди
                </ListItemText>
                <ListItemText sx={{ whiteSpace: 'nowrap' }}>
                  Електро-велосипеди
                </ListItemText>
                <ListItemText sx={{ whiteSpace: 'nowrap' }}>
                  Електро-велосипеди
                </ListItemText>
                <ListItemText sx={{ whiteSpace: 'nowrap' }}>
                  Електро-велосипеди
                </ListItemText>
                <ListItemText sx={{ whiteSpace: 'nowrap' }}>
                  Електро-велосипеди
                </ListItemText>
                <ListItemText sx={{ whiteSpace: 'nowrap' }}>
                  Електро-велосипеди
                </ListItemText>
              </List>
            </ListItem>
            <ListItem
              sx={{
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'flex-start',
                flexDirection: 'column',
              }}
            >
              <Typography color="primary">Велосипеди</Typography>
              <List>
                <ListItemText sx={{ whiteSpace: 'nowrap' }}>
                  Електро-велосипеди
                </ListItemText>
                <ListItemText sx={{ whiteSpace: 'nowrap' }}>
                  Електро-велосипеди
                </ListItemText>
                <ListItemText sx={{ whiteSpace: 'nowrap' }}>
                  Електро-велосипеди
                </ListItemText>
                <ListItemText sx={{ whiteSpace: 'nowrap' }}>
                  Електро-велосипеди
                </ListItemText>
                <ListItemText sx={{ whiteSpace: 'nowrap' }}>
                  Електро-велосипеди
                </ListItemText>
                <ListItemText sx={{ whiteSpace: 'nowrap' }}>
                  Електро-велосипеди
                </ListItemText>
              </List>
            </ListItem>
            <ListItem
              sx={{
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'flex-start',
                flexDirection: 'column',
              }}
            >
              <Typography color="primary">Велосипеди</Typography>
              <List>
                <ListItemText sx={{ whiteSpace: 'nowrap' }}>
                  Електро-велосипеди
                </ListItemText>
                <ListItemText sx={{ whiteSpace: 'nowrap' }}>
                  Електро-велосипеди
                </ListItemText>
                <ListItemText sx={{ whiteSpace: 'nowrap' }}>
                  Електро-велосипеди
                </ListItemText>
                <ListItemText sx={{ whiteSpace: 'nowrap' }}>
                  Електро-велосипеди
                </ListItemText>
                <ListItemText sx={{ whiteSpace: 'nowrap' }}>
                  Електро-велосипеди
                </ListItemText>
                <ListItemText sx={{ whiteSpace: 'nowrap' }}>
                  Електро-велосипеди
                </ListItemText>
              </List>
            </ListItem>
            <ListItem
              sx={{
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'flex-start',
                flexDirection: 'column',
              }}
            >
              <Typography color="primary">Велосипеди</Typography>
              <List>
                <ListItemText sx={{ whiteSpace: 'nowrap' }}>
                  Електро-велосипеди
                </ListItemText>
                <ListItemText sx={{ whiteSpace: 'nowrap' }}>
                  Електро-велосипеди
                </ListItemText>
                <ListItemText sx={{ whiteSpace: 'nowrap' }}>
                  Електро-велосипеди
                </ListItemText>
                <ListItemText sx={{ whiteSpace: 'nowrap' }}>
                  Електро-велосипеди
                </ListItemText>
                <ListItemText sx={{ whiteSpace: 'nowrap' }}>
                  Електро-велосипеди
                </ListItemText>
                <ListItemText sx={{ whiteSpace: 'nowrap' }}>
                  Електро-велосипеди
                </ListItemText>
              </List>
            </ListItem>
          </Grid>
        </Paper>
      </Fade>
    </Modal>
  </>
);

export default Catalog;
