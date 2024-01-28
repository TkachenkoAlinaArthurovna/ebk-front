'use client';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import {
  Search,
  SearchIconWrapper,
  StyledTextField,
} from '@/app/ui/Header/HeaderStyles';

const options = ['Велик', 'Електровелик', 'горний велик', 'руль', 'шини'];

export const SearchComponent = () => {
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
