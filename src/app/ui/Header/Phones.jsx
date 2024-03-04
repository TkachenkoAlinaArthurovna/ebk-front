'use client';

import React, { useState } from 'react';
import { MenuItem, FormControl, Box } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { styled, Select } from '@mui/material';
import Link from 'next/link';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { WrapperPhones, WrapperIcon } from '@/app/ui/Header/HeaderStyles';

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
    <WrapperPhones>
      <WrapperIcon>
        <LocalPhoneIcon />
      </WrapperIcon>

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
            <Link href="tel:+380505621868">+38 050 562 18 68</Link>
          </MenuItem>
          <MenuItem value="price-low">
            <Link href="tel:+380965471606">+38 096 547 16 06</Link>
          </MenuItem>
        </StyledSelect>
      </StyledFormControl>
    </WrapperPhones>
  );
};

export default Phones;
