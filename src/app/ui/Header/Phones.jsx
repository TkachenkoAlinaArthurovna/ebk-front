import { ListItemButton, ListItemText, Paper } from '@mui/material';
import Popover from '@mui/material/Popover';

const Phones = ({ handleClosePhones, anchor }) => {
  const openPhones = Boolean(anchor);

  return (
    <Popover
      sx={{ position: 'absolute', left: -200 }}
      open={openPhones}
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
  );
};
export default Phones;
