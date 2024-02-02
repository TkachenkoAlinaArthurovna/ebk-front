'use client';

import React, { useState } from 'react';
import { MenuItem, FormControl } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { StyledSelect } from '@/app/ui/CategoryPage/SortingProducts/SortingProductsStyles';

const SortingProducts = () => {
  const [view, setView] = useState('popular');

  const handleChange = (event) => {
    console.log(event.target.value);
    setView(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 268, border: 0 }} size="small">
      <StyledSelect
        IconComponent={KeyboardArrowDownIcon}
        sx={{
          border: 'none',
          outline: 'none',
          '& legend': { display: 'none' },
          '& fieldset': { top: 0 },
        }}
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={view}
        label="View"
        onChange={handleChange}
      >
        <MenuItem value="popular">За популярністю</MenuItem>
        <MenuItem value="price-low">Від дешевих до дорогих</MenuItem>
        <MenuItem value="price-high">Від дорогих до дешевих</MenuItem>
      </StyledSelect>
    </FormControl>
  );
};

export default SortingProducts;
