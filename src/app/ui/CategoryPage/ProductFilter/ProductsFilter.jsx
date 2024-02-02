import React from 'react';
import FilterByPrice from '@/app/ui/CategoryPage/ProductFilter/FilterByPrice';
import FilterParam from '@/app/ui/CategoryPage/ProductFilter/FilterParam';
import { categoryData } from '@/app/lib/mockDataCategoryPage';
import { StyledWrapper, StyledButton } from '@/app/ui/CategoryPage/ProductFilter/ProductsFilterStyles';

const ProductFilter = () => {
  const filterParams = categoryData.map(({ id, name, values }) => {
    return <FilterParam key={id} paramName={name} paramValues={values} />;
  });

  return (
    <StyledWrapper>
      <FilterByPrice />
      {filterParams}
      <StyledButton onClick={() => console.log('Apply Filters')}>
        Застосувати фільтри
      </StyledButton>
    </StyledWrapper>
  );
};

export default ProductFilter;
