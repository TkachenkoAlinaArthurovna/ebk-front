'use client';
import React from 'react';
import { InputAdornment, FormControl } from '@mui/material';
import { useSelector } from 'react-redux';
import {
  StyledWrapper,
  StyledMinPrice,
  StyledInput,
} from '@/app/ui/CategoryPage/ProductFilter/FilterByPrice/MinMaxInputs/MinMaxInputsStyles';

const MinMaxInputs = ({ priceRange, categoryId }) => {
  const categoryProductsPrice = priceRange;
  const minPriceArr = useSelector((state) => state.productFilter.minPrice);
  const maxPriceArr = useSelector((state) => state.productFilter.maxPrice);
  const minPrice = () => {
    const obj = minPriceArr.find((item) => item.category === categoryId);
    const value = obj ? obj.value : Math.min(...categoryProductsPrice);
    return value;
  };
  const maxPrice = () => {
    const obj = maxPriceArr.find((item) => item.category === categoryId);
    const value = obj ? obj.value : Math.max(...categoryProductsPrice);
    return value;
  };

  return (
    <>
      <StyledWrapper direction="row">
        <StyledMinPrice>
          <FormControl>
            <StyledInput
              id="min-price"
              value={minPrice()}
              readOnly={true}
              endAdornment={<InputAdornment position="end">грн</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'min-price',
              }}
            />
          </FormControl>
        </StyledMinPrice>
        <FormControl>
          <StyledInput
            id="max-price"
            value={maxPrice()}
            readOnly={true}
            variant="outlined"
            endAdornment={<InputAdornment position="end">грн</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'max-price',
            }}
          />
        </FormControl>
      </StyledWrapper>
    </>
  );
};

export default MinMaxInputs;
