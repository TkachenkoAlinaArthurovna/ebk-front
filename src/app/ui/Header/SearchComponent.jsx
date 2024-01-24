import React from 'react';
import { styled } from '@mui/material/styles';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const SearchComponent = () => {
  const Search = styled('div')`
    flex-grow: 1;
    height: 56px;
    margin-right: 32px;
    position: relative;
    border-radius: 100px;
    boxshadow: 0 2px 0 0 rgba(0, 0, 0, 0.08);
    background-color: #f3f3f3;
    @media (max-width: 1250px) {
      height: 48px;
    }
  `;

  const SearchIconWrapper = styled('div')`
    padding: 15px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const StyledInputBase = styled(InputBase)`
    color: inherit;
    padding: 12px 40px;
    width: 100%;
    @media (min-width: 400px) {
      padding: 12px 30px;
    }
  `;

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
