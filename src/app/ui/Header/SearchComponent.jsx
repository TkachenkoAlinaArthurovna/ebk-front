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
    @media (max-width: 900px) {
      height: '40px';
    }
  `;

  const SearchIconWrapper = styled('div')`
    padding-right: 15px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const StyledTextField = styled(TextField)(({ theme }) => ({
    width: '100%',
    [theme.breakpoints.down('lg')]: {
      // height: '40px',
      padding: 0,
    },
    color: theme.palette.secondary.main,
    borderRadius: '100px',
    '& .MuiOutlinedInput-root': {
      borderRadius: '100px',
      border: 'none',
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