'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCheckedFilters } from '@/redux/slices/ProductFilterSlice';
import {
  StyledWrapper,
  StyledParamValue,
  StyledCheckbox,
  StyledAccordionDetails,
} from '@/app/ui/CategoryPage/ProductFilter/FilterParam/ParamValue/ParamValueStyles';

const ParamValue = ({ paramValue, paramValueEng, paramNameEng }) => {
  const dispatch = useDispatch();
  const checkedFilters = useSelector(
    (state) => state.productFilter.checkedFilters,
  );
  const handleFilterClick = () => {
    dispatch(toggleCheckedFilters({ paramValue, paramValueEng, paramNameEng }));
  };

  function isParamValueExists(array, paramValue) {
    return array.some((item) => item.paramValue === paramValue);
  }

  return (
    <StyledAccordionDetails onClick={handleFilterClick}>
      <StyledWrapper>
        <StyledParamValue>{paramValue}</StyledParamValue>
        <StyledCheckbox
          checked={isParamValueExists(checkedFilters, paramValue)}
        />
      </StyledWrapper>
    </StyledAccordionDetails>
  );
};

export default ParamValue;
