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
import ButtonMain from '@/app/ui/ButtonMain';

const ProductFilter = ({ toggleDrawer, openDrawer }) => {
  const dispatch = useDispatch();
  const minPrice = useSelector((state) => state.productFilter.minPrice);
  const maxPrice = useSelector((state) => state.productFilter.maxPrice);
  const checkedFilters = useSelector(
    (state) => state.productFilter.checkedFilters,
  );

  const handleFilterClick = () => {
    const selectedPrice = `${minPrice}-${maxPrice} грн.`;
    dispatch(addSelectedPrice(`${minPrice}-${maxPrice} грн.`));
    const updatedFilters = [...checkedFilters];
    dispatch(addProductToFilter(updatedFilters));
  };

  const filterParams = categoryData.map(({ id, name, values }) => {
    return <FilterParam key={id} paramName={name} paramValues={values} />;
  });

  return (
    <>
      <StyledWrapper>
        <FilterByPrice />
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
