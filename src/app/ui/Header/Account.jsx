'use client';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Menu from '@mui/material/Menu';
import { MenuItem } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { useAuth } from '@/redux/contexts/AuthContext';

const Account = ({ handleOpenAuthModal }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { isAuthorized, logout } = useAuth();

  const handleOpenAuthModalReal = () => {
    handleOpenAuthModal(false);
  };

  return (
    <>
      {!isAuthorized() && (
        <Box>
          <IconButton onClick={handleOpenAuthModalReal}>
            <Badge badgeContent={null} color="error">
              <PermIdentityIcon
                sx={{ width: '24px', height: '24px', color: '#252A31' }}
              />
            </Badge>
          </IconButton>
        </Box>
      )}
      {isAuthorized() && (
        <Box>
          <IconButton
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <Badge badgeContent={null} color="error">
              <PermIdentityIcon
                sx={{ width: '24px', height: '24px', color: '#252A31' }}
              />
            </Badge>
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link href="/cabinet/personal-information">Кабінет</Link>
            </MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        </Box>
      )}
    </>
  );
};

export default Account;
