'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  removeProductFromFilter,
  resetFilters,
} from '@/redux/slices/ProductFilterSlice';
import {
  StyledWrapper,
  StyledChip,
  StyledSelectedFilterText,
  StyledSelectedFilterParamsBox,
} from '@/app/ui/CategoryPage/SelectedFilters/SelectedFiltersStyles';

const SelectedFilters = () => {
  const selectedFilters = useSelector(
    (state) => state.productFilter.selectedFilters,
  );

  const dispatch = useDispatch();

  const handleRemoveFilter = (filterToRemove) => {
    dispatch(removeProductFromFilter(filterToRemove));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  const ChipsArray = () => {
    const selectedFilterParams = selectedFilters.map((filter, index) => (
      <Box key={index}>
        <StyledChip
          label={filter.paramValue}
          onDelete={() => handleRemoveFilter(filter)}
          deleteIcon={<CloseIcon />}
        />
      </Box>
    ));

    return (
      <StyledSelectedFilterParamsBox>
        {selectedFilterParams}
      </StyledSelectedFilterParamsBox>
    );
  };

  return (
    <StyledWrapper>
      {selectedFilters.length > 0 && (
        <StyledSelectedFilterText variant="body1" onClick={handleResetFilters}>
          Скинути фільтри
        </StyledSelectedFilterText>
      )}
      <ChipsArray />
    </StyledWrapper>
  );
};

export default SelectedFilters;
