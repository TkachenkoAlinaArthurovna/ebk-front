import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const SearchComponent = () => {
  const Search = styled('div')(({ theme }) => ({
    flexGrow: '1',
    height: '56px',
    marginRight: '32px',
    position: 'relative',
    borderRadius: 100,
    boxShadow: '0 2px 0 0 rgba(0, 0, 0, 0.08)',
    backgroundColor: alpha(theme.palette.lightGrey.main, 1),
    '&:hover': {
      backgroundColor: alpha(theme.palette.lightGrey.main, 0.55),
    },
    [theme.breakpoints.up('sm')]: {},
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    padding: '12px 40px',
    width: '100%',
    '& .MuiInputBase-input': {
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '100%',
      },
    },
  }));

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Я шукаю…" />
    </Search>
  );
};
export default SearchComponent;
