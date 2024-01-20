import { useState } from 'react';
import {
  Box,
  Button,
  ListItemButton,
  ListItemText,
  Paper,
} from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';

const Phones = () => {
  const [phoneList, setPhoneList] = useState(false);

  const [anchor, setAnchor] = useState(null);

  const handleClickPones = (event) => {
    setPhoneList(!phoneList);
    setAnchor(event.currentTarget);
  };

  const handleClosePhones = () => {
    setAnchor(null);
    setPhoneList(!phoneList);
  };

  const open = Boolean(anchor);

  const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
    color: 'inherit',
    '&:hover': {
      backgroundColor: alpha(theme.palette.white.main, 1),
    },
  }));

  return (
    <Box sx={{ position: 'relative', minWidth: '240px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <StyledListItemButton href="tel:+380 63 32 95 468">
          <LocalPhoneIcon sx={{ color: 'black', marginRight: 1 }} />
          <ListItemText primary="+380 63 32 95 468" />
        </StyledListItemButton>
        <IconButton onClick={handleClickPones}>
          {phoneList ? (
            <ExpandLess sx={{ color: 'black' }} />
          ) : (
            <ExpandMore sx={{ color: 'black' }} />
          )}
        </IconButton>
        <Popover
        sx={{ position: 'absolute', left: -200 }}
          open={open}
          anchorEl={anchor}
          onClose={handleClosePhones}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <Paper>
            <ListItemButton href="tel:+380 72 58 58 445">
              <ListItemText primary="+380 72 58 58 445" />
            </ListItemButton>
            <ListItemButton href="tel:+380 72 58 58 445">
              <ListItemText primary="+380 72 58 58 445" />
            </ListItemButton>
            <ListItemButton href="tel:+380 72 58 58 445">
              <ListItemText primary="+380 72 58 58 445" />
            </ListItemButton>
          </Paper>
        </Popover>
      </Box>
    
    </Box>
  );
};
export default Phones;
