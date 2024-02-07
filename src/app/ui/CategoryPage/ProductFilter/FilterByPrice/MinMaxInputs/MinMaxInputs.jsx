'use client';
import React from 'react';
import { InputAdornment, FormControl } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
  addProductToFilter,
  removeProductFromFilter,
} from '@/redux/slices/ProductFilterSlice';
import {
  setMinPrice,
  setMaxPrice,
} from '@/redux/slices/MinMaxFilterPriceSlice';
import {
  StyledWrapper,
  StyledMinPrice,
  StyledInput,
  StyledButton,
} from '@/app/ui/CategoryPage/ProductFilter/FilterByPrice/MinMaxInputs/MinMaxInputsStyles';

const MinMaxInputs = () => {
  const dispatch = useDispatch();
  const minPrice = useSelector((state) => state.minMaxFilterPrice.minPrice);
  const maxPrice = useSelector((state) => state.minMaxFilterPrice.maxPrice);
  const selectedPrice = useSelector(
    (state) => state.productFilter.selectedPrice,
  );

  const handleMinPriceChange = (event) => {
    dispatch(setMinPrice(parseInt(event.target.value) || 0));
  };

  const handleMaxPriceChange = (event) => {
    dispatch(setMaxPrice(parseInt(event.target.value) || 0));
  };

  const handleFilterClick = () => {
    const newSelectedPrice = `${minPrice}-${maxPrice}`;
    if (selectedPrice !== newSelectedPrice) {
      if (selectedPrice) {
        dispatch(removeProductFromFilter(selectedPrice));
      }
      dispatch(addProductToFilter(newSelectedPrice));
    }
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
      <StyledButton onClick={handleFilterClick}>OK</StyledButton>
    </>
  );
};

export default MinMaxInputs;
