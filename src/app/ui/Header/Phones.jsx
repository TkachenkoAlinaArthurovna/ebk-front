'use client';
import { ListItemButton, ListItemText, Paper } from '@mui/material';
import Popover from '@mui/material/Popover';

const Phones = ({ handleClosePhones, anchor }) => {
  const openPhones = Boolean(anchor);
  const id = openPhones ? 'simple-popover' : undefined;
  return (
    <Popover
      id={id}
      open={openPhones}
      onClose={handleClosePhones}
      // anchorReference="anchorEl"
      anchorOrigin={{
        vertical: 80,
        horizontal: 1030,
      }}
      // transformOrigin={{
      //   vertical: 'top',
      //   horizontal: 'center',
      // }}
    >
      <Paper sx={{ width: '170px' }}>
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
  );
};
export default Phones;
