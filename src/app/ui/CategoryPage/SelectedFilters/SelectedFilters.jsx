'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
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
import { generateQueryString } from '@/app/lib/getFilterParams';
import { dollar } from '@/app/lib/dollar';

const SelectedFilters = ({ categoryId, priceRange }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((path) => path);
  const minPriceArr = useSelector((state) => state.productFilter.minPrice);
  const maxPriceArr = useSelector((state) => state.productFilter.maxPrice);
  const selectedFilters = useSelector(
    (state) => state.productFilter.selectedFilters,
  );
  const checkedFilters = useSelector(
    (state) => state.productFilter.checkedFilters,
  );

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

  const handleRemoveFilter = (filterToRemove) => {
    dispatch(removeProductFromFilter(filterToRemove));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  const goCategoryPage = () => {
    router.push(`/${pathnames[0]}`);
  };

  const goNewFilter = (filterToRemove) => {
    let selectedPrice;
    if (filterToRemove.paramValue.includes('грн.')) {
      selectedPrice = {
        paramValue: `${priceRange[0] * dollar}-${priceRange[priceRange.length - 1] * dollar} грн.`,
      };
    }
    if (!filterToRemove.paramValue.includes('грн.')) {
      selectedPrice = { paramValue: `${minPrice()}-${maxPrice()} грн.` };
    }
    const updatedFilters = checkedFilters.filter(
      (filter) => filter.paramValue !== filterToRemove.paramValue,
    );
    const newUpdatedFilters = [selectedPrice, ...updatedFilters];
    const queryString = generateQueryString(newUpdatedFilters);
    const urlComponent = encodeURIComponent(queryString);
    router.push(`/${pathnames[0]}/filter/${urlComponent}`);
  };

  const ChipsArray = () => {
    const selectedFilterParams = selectedFilters.map((filter, index) => (
      <Box key={index}>
        <StyledChip
          label={filter.paramValue}
          onDelete={() => {
            if (selectedFilters.length === 1) {
              handleRemoveFilter(filter);
              goCategoryPage();
            } else {
              handleRemoveFilter(filter);
              goNewFilter(filter);
            }
          }}
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
        <StyledSelectedFilterText
          variant="body1"
          onClick={() => {
            handleResetFilters();
            goCategoryPage();
          }}
        >
          Скинути фільтри
        </StyledSelectedFilterText>
      )}
      <ChipsArray />
    </StyledWrapper>
  );
};

export default SelectedFilters;
