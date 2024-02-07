'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductToFilter,
  removeProductFromFilter,
} from '@/redux/slices/ProductFilterSlice';
import {
  StyledWrapper,
  StyledParamValue,
  StyledCheckbox,
  StyledAccordionDetails,
} from '@/app/ui/CategoryPage/ProductFilter/FilterParam/ParamValue/ParamValueStyles';

const ParamValue = ({ paramValue }) => {
  const dispatch = useDispatch();
  const selectedFilters = useSelector(
    (state) => state.productFilter.selectedFilters,
  );

  const handleFilterClick = () => {
    if (selectedFilters.includes(paramValue)) {
      dispatch(removeProductFromFilter(paramValue));
    } else {
      dispatch(addProductToFilter(paramValue));
    }
  };

  return (
    <StyledAccordionDetails onClick={handleFilterClick}>
      {' '}
      {/* Додано обробник подій на StyledAccordionDetails */}
      <StyledWrapper>
        <StyledParamValue>{paramValue}</StyledParamValue>
        <StyledCheckbox checked={selectedFilters.includes(paramValue)} />
      </StyledWrapper>
    </StyledAccordionDetails>
  );
};

export default ParamValue;
