'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { MenuItem, FormControl } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { StyledSelect } from '@/app/ui/CategoryPage/SortingProducts/SortingProductsStyles';

const SortingProducts = () => {
  const router = useRouter();
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((path) => path);
  const sort = () => {
    if (pathnames.length == 1) {
      return pathnames[0].includes('sort=desc') ? 'desc' : 'asc';
    }
    if (pathnames.length > 2) {
      return pathnames[2].includes('sort=desc') ? 'desc' : 'asc';
    }
  };
  const [view, setView] = useState(sort);

  const removeAfterAmpersand = (str) => {
    const ampersandIndex = str.indexOf('&');
    if (ampersandIndex !== -1) {
      return str.substring(0, ampersandIndex);
    }
    return str;
  };

  const handleChange = (event) => {
    if (event.target.value !== view && pathnames.length == 1) {
      setView(event.target.value);
      router.push(
        `/${removeAfterAmpersand(pathnames[0])}&sort=${event.target.value}`,
      );
    }
    if (event.target.value !== view && pathnames.length > 2) {
      setView(event.target.value);
      router.push(
        `/${pathnames[0]}/${pathnames[1]}/${pathnames[2].split('&page')[0].replace(/&sort=(asc|desc)/, '')}&sort=${event.target.value}`,
      );
    }
  };

  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: 268,
        border: 0,
        '@media (max-width: 400px)': {
          minWidth: 220,
        },
      }}
      size="small"
    >
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
        <MenuItem value="desc">Від дорогих до дешевих</MenuItem>
        <MenuItem value="asc">Від дешевих до дорогих</MenuItem>
      </StyledSelect>
    </FormControl>
  );
};

export default SortingProducts;
