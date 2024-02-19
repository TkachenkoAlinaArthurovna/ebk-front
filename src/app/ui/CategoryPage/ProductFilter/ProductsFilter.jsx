'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addProductToFilter,
  addSelectedPrice,
} from '@/redux/slices/ProductFilterSlice';
import FilterByPrice from '@/app/ui/CategoryPage/ProductFilter/FilterByPrice';
import FilterParam from '@/app/ui/CategoryPage/ProductFilter/FilterParam';
import { categoryData } from '@/app/lib/mockDataCategoryPage';
import {
  StyledWrapper,
  StyledSubstrate,
  StyledButton,
  StyledWrapperSide,
  StyledHeadFilter,
} from '@/app/ui/CategoryPage/ProductFilter/ProductsFilterStyles';
import CloseIcon from '@mui/icons-material/Close';
import { Drawer, IconButton, Typography } from '@mui/material';
import { dollar } from '@/app/lib/dollar';

const ProductFilter = ({
  toggleDrawer,
  openDrawer,
  priceRange,
  paramsForCategory,
  categoryId,
}) => {
  const dispatch = useDispatch();
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

  const checkedFilters = useSelector(
    (state) => state.productFilter.checkedFilters,
  );

  function multiplyAndRoundUp(array, multiplier) {
    return array.map((number) => Math.ceil(number * multiplier));
  }

  const handleFilterClick = () => {
    const selectedPrice = `${minPrice()}-${maxPrice()} грн.`;
    dispatch(addSelectedPrice(`${minPrice()}-${maxPrice()} грн.`));
    const updatedFilters = [...checkedFilters];
    dispatch(addProductToFilter(updatedFilters));
  };
  const filterParams = paramsForCategory.map(({ name, values }) => {
    return <FilterParam key={name[0]} paramName={name} paramValues={values} />;
  });

  return (
    <>
      <StyledWrapper>
        <FilterByPrice
          priceRange={multiplyAndRoundUp(priceRange, dollar)}
          categoryId={categoryId}
        />
        {filterParams}
        <StyledSubstrate>
          <StyledButton onClick={handleFilterClick}>
            Застосувати фільтри
          </StyledButton>
        </StyledSubstrate>
      </StyledWrapper>
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
        <StyledWrapperSide>
          <StyledHeadFilter>
            <Typography
              sx={{ padding: '16px', fontSize: '22px', fontWeight: '500' }}
            >
              Фільтри
            </Typography>
            <IconButton onClick={toggleDrawer} sx={{ padding: '16px' }}>
              <CloseIcon />
            </IconButton>
          </StyledHeadFilter>
          <FilterByPrice />
          {filterParams}
          <StyledSubstrate>
            <StyledButton onClick={handleFilterClick}>
              Застосувати фільтри
            </StyledButton>
          </StyledSubstrate>
        </StyledWrapperSide>
      </Drawer>
    </>
  );
};

export default ProductFilter;
