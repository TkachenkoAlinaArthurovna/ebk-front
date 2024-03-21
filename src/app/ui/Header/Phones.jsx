'use client';

import React, { useState } from 'react';
import { MenuItem, FormControl, Box } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { styled, Select } from '@mui/material';
import Link from 'next/link';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { WrapperPhones, WrapperIcon } from '@/app/ui/Header/HeaderStyles';
import { useResize } from '@/app/lib/helpers';

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
  @media (max-width: 1100px) {
    min-width: 0px;
  }
`;

const Phones = () => {
  const [width, height] = useResize();
  const [view, setView] = useState('+38 050 562 18 68');

  const handleChange = (event) => {
    setView(event.target.value);
  };

  return (
    <WrapperPhones>
      <WrapperIcon>
        <LocalPhoneIcon />
      </WrapperIcon>

      <StyledFormControl>
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
          renderValue={width > 1100 ? () => view : () => null}
        >
          <MenuItem value="+38 050 562 18 68">
            <Link href="tel:+380505621868">+38 050 562 18 68</Link>
          </MenuItem>
          <MenuItem value="+38 096 547 16 06">
            <Link href="tel:+380965471606">+38 096 547 16 06</Link>
          </MenuItem>
        </StyledSelect>
      </StyledFormControl>
    </WrapperPhones>
  );
};

export default Phones;
