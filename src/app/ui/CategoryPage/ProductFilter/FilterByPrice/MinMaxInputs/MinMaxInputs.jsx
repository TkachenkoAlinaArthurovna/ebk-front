import React from 'react';
import { InputAdornment, FormControl } from '@mui/material';
import {
  StyledWrapper,
  StyledMinPrice,
  StyledInput,
} from '@/app/ui/CategoryPage/ProductFilter/FilterByPrice/MinMaxInputs/MinMaxInputsStyles';

const MinMaxInputs = () => {
  return (
    <StyledWrapper direction="row">
      <StyledMinPrice>
        <StyledInput
          id="min-price"
          endAdornment={<InputAdornment position="end">грн</InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            'aria-label': 'min-price',
          }}
        />
      </StyledMinPrice>
      <FormControl variant="outlined">
        <StyledInput
          id="max-price"
          endAdornment={<InputAdornment position="end">грн</InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            'aria-label': 'max-price',
          }}
        />
      </FormControl>
    </StyledWrapper>
  );
};

export default MinMaxInputs;
