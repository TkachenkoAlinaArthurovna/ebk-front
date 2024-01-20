import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const SearchComponent = () => {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 100,
    padding: '12px 40px',
    boxShadow: '0 2px 0 0 rgba(0, 0, 0, 0.08)',
    backgroundColor: alpha(theme.palette.lightGrey.main, 1),
    '&:hover': {
      backgroundColor: alpha(theme.palette.lightGrey.main, 0.55),
    },
    // marginRight: theme.spacing(2),
    // marginLeft: 0,
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   // marginLeft: theme.spacing(3),
    //   width: 'auto',
    // },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    // pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      // padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      // paddingLeft: `calc(1em + ${theme.spacing(1)})`,
      // transition: theme.transitions.create('width'),
      // width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '30ch',
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
