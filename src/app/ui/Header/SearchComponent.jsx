'use client';
import React from 'react';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['Велик', 'Електровелик', 'горний велик', 'руль', 'шини'];

export const SearchComponent = () => {
  const Search = styled('div')`
    flex-grow: 1;
    position: relative;
    margin-right: 32px;
    border-radius: 100px;
    height: 100%;
    @media (max-width: 900px) {
      position: absolute;
      top: 65px;
      width: 100%;
      height: 43px;
    }
  `;

  const SearchIconWrapper = styled('div')`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 900px) {
      position: absolute;
      right: 0;
      top: 50%;
    }
  `;

  const StyledTextField = styled(TextField)(({ theme }) => ({
    width: '100%',
    color: theme.palette.secondary.main,
    borderRadius: '100px',
    height: '100%',
    [theme.breakpoints.down('lg')]: {
      height: '43px ',
      fontSize: '12px',
      '& .MuiInputLabel-root': {
        position: 'absolute',
        top: '-5px',
        left: '5px',
      },
      '& .MuiInputBase-input': {
        position: 'relative',
        top: '-7px',
      },
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '100px',
      border: 'none',
      height: '100%',
    },
  }));

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <Autocomplete
        disablePortal
        freeSolo
        disableClearable
        id="combo-box-demo"
        options={options}
        sx={{ width: '100%', borderRadius: '100px' }}
        renderInput={(params) => (
          <StyledTextField {...params} label="Я шукаю..." />
        )}
      />
    </Search>
  );
};
export default SearchComponent;
