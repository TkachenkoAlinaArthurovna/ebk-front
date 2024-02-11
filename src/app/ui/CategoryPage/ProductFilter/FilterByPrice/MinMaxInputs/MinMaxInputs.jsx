'use client';
import React from 'react';
import { InputAdornment, FormControl } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setMinPrice, setMaxPrice } from '@/redux/slices/ProductFilterSlice';
import {
  StyledWrapper,
  StyledMinPrice,
  StyledInput,
} from '@/app/ui/CategoryPage/ProductFilter/FilterByPrice/MinMaxInputs/MinMaxInputsStyles';

const MinMaxInputs = () => {
  const minPrice = useSelector((state) => state.productFilter.minPrice);
  const maxPrice = useSelector((state) => state.productFilter.maxPrice);
  const dispatch = useDispatch();

  const handleMinPriceChange = (event) => {
    dispatch(setMinPrice(parseInt(event.target.value) || 0));
  };

  const handleMaxPriceChange = (event) => {
    dispatch(setMaxPrice(parseInt(event.target.value) || 0));
  };

  return (
    <>
      <StyledWrapper direction="row">
        <StyledMinPrice>
          <FormControl>
            <StyledInput
              id="min-price"
              value={minPrice}
              onChange={handleMinPriceChange}
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
            value={maxPrice}
            onChange={handleMaxPriceChange}
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
