import React from 'react';
import Link from 'next/link';
import { Popover, Paper, ListItemButton } from '@mui/material';

const Catalog = ({ open, anchorEl, handleCloseCatalog }) => {
  return (
    <>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleCloseCatalog}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Paper>
          <ListItemButton>
            <Link href="/">/////////////////////////</Link>
          </ListItemButton>
          <ListItemButton>
            <Link href="/">////////////////////</Link>
          </ListItemButton>
          <ListItemButton>
            <Link href="/">/////</Link>
          </ListItemButton>
        </Paper>
      </Popover>
    </>
  );
};
export default Catalog;
