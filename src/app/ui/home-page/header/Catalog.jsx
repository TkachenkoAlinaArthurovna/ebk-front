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
import { boxSizing } from '@mui/system';

const stylePaper = {
  display: 'flex',
  width: '90vw',
  // height: '80vh',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '24px',
  boxShadow: 24,
  p: 4,
};
const categoryStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
};
const boxStyles = {
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '100px',
  // width: '310px',
  // height: '56px',
  ':hover': {
    backgroundColor: "lightgray",
  }
};
const titleStyles = {
  fontWeight: 500,
  fontSize: '16px',
};
const categoryItemStyles = {
  fontWeight: 400,
  fontSize: '16px',
  paddingBottom: '20px',
  whiteSpace: 'nowrap',
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
          <ul sx={categoryStyles} >
            <ListItem sx={boxStyles}>
              <ListItemText>Електро-велосипеди</ListItemText>
              <ListItemIcon>
                <ArrowForwardIosIcon fontSize="small" />
              </ListItemIcon>
            </ListItem>
            <ListItem sx={boxStyles}>
              <ListItemText primary="Електро-велокомплекти" />
              <ListItemIcon>
                <ArrowForwardIosIcon fontSize="small" />
              </ListItemIcon>
            </ListItem>
            <ListItem sx={boxStyles}>
              <ListItemText primary="Мотор та мотор-колеса" />
              <ListItemIcon>
                <ArrowForwardIosIcon fontSize="small" />
              </ListItemIcon>
            </ListItem>
            <ListItem sx={boxStyles}>
              <ListItemText primary="Електро-велосипеди" />
              <ListItemIcon>
                <ArrowForwardIosIcon fontSize="small" />
              </ListItemIcon>
            </ListItem>
            <ListItem sx={boxStyles}>
              <ListItemText primary="Електро-велосипеди" />
              <ListItemIcon>
                <ArrowForwardIosIcon fontSize="small" />
              </ListItemIcon>
            </ListItem>
            <ListItem sx={boxStyles}>
              <ListItemText primary="Електро-велосипеди" />
              <ListItemIcon>
                <ArrowForwardIosIcon fontSize="small" />
              </ListItemIcon>
            </ListItem>
            <ListItem sx={boxStyles}>
              <ListItemText primary="Електро-велосипеди" />
              <ListItemIcon>
                <ArrowForwardIosIcon fontSize="small" />
              </ListItemIcon>
            </ListItem>
          </ul>
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
            <Box
              sx={{
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'flex-start',
                flexDirection: 'column',
              }}
            >
              <Typography sx={titleStyles} color="primary">
                Гірські
              </Typography>
              <List>
                <ListItemText sx={categoryItemStyles}>
                  Велосипеди для крос-кантрі
                </ListItemText>
                <ListItemText sx={categoryItemStyles}>
                  Жіночі гірські велосипеди
                </ListItemText>
                <ListItemText sx={categoryItemStyles}>
                  Прогулянкові велосипеди
                </ListItemText>
                <ListItemText sx={categoryItemStyles}>
                  Трейлові велосипеди
                </ListItemText>
                <ListItemText sx={categoryItemStyles}>
                  Велосипеди для екстриму
                </ListItemText>
                <ListItemText sx={categoryItemStyles}>Найнери</ListItemText>
                <ListItemText sx={categoryItemStyles}>Двопідвіси</ListItemText>
              </List>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'flex-start',
                flexDirection: 'column',
              }}
            >
              <Typography sx={titleStyles} color="primary">
                Гірські
              </Typography>
              <List>
                <ListItemText sx={categoryItemStyles}>
                  Велосипеди для крос-кантрі
                </ListItemText>
                <ListItemText sx={categoryItemStyles}>
                  Жіночі гірські велосипеди
                </ListItemText>
                <ListItemText sx={categoryItemStyles}>
                  Прогулянкові велосипеди
                </ListItemText>
                <ListItemText sx={categoryItemStyles}>
                  Трейлові велосипеди
                </ListItemText>
                <ListItemText sx={categoryItemStyles}>
                  Велосипеди для екстриму
                </ListItemText>
                <ListItemText sx={categoryItemStyles}>Найнери</ListItemText>
                <ListItemText sx={categoryItemStyles}>Двопідвіси</ListItemText>
              </List>
            </Box>
            
          </Grid>
        </Paper>
      </Fade>
    </Modal>
  </>
);

export default Catalog;
 