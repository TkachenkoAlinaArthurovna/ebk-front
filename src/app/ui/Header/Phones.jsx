'use client';

import React, { useState } from 'react';
import { MenuItem, FormControl } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { styled, Select } from '@mui/material';

export const StyledSelect = styled(Select)`
  border-radius: 8px;
  font-size: 16px;
  letter-spacing: 0.5px;

  & .MuiInputBase-root {
    border: none !important;
    outline: none !important;
  }

  & .MuiOutlinedInput-notchedOutline {
    border: none !important;
  }
`;

export const StyledFormControl = styled(FormControl)`
  margin: 1;
  min-width: 190px;
  border: 0;
  @media (max-width: 1023px) {
    display: none;
  }
`;

const Phones = () => {
  const [view, setView] = useState('popular');

  const handleChange = (event) => {
    setView(event.target.value);
  };

  return (
    <StyledFormControl sx={{ m: 1, minWidth: 190, border: 0 }} size="small">
      <StyledSelect
        IconComponent={ExpandMore}
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
        <MenuItem value="popular">
          <a href="tel:+380973732122">+380 97 373 2122</a>
        </MenuItem>
        <MenuItem value="price-low">
          <a href="tel:+380973732122">+380 97 373 2122</a>
        </MenuItem>
        <MenuItem value="price-high">
          <a href="tel:+380973732122">+380 97 373 2122</a>
        </MenuItem>
      </StyledSelect>
    </StyledFormControl>
  );
};

export default Phones;
