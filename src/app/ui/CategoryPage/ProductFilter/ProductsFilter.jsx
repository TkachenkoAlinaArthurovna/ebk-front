import React from 'react';
import FilterByPrice from '@/app/ui/CategoryPage/ProductFilter/FilterByPrice';
import FilterParam from '@/app/ui/CategoryPage/ProductFilter/FilterParam';
import {StyledWrapper} from '@/app/ui/CategoryPage/ProductFilter/ProductsFilterStyles';

const ProductFilter = () => {
  return (
    <StyledWrapper>
      <FilterByPrice />
      <FilterParam paramName="Зріст" />
    </StyledWrapper>
  );
};

export default ProductFilter;
