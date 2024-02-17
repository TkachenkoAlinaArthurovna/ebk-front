import React from 'react';
import { StyledWrapper } from '@/app/ui/CategoryPage/CategoryItems/CategoryItemsStyles';
import ProductsList from '@/app/ui/CategoryPage/CategoryItems/ProductsList';
import Pagination from '@/app/ui/CategoryPage/CategoryItems/Pagination';

const CategoryItems = () => {
  return (
    <StyledWrapper>
      <ProductsList />
      <Pagination />
    </StyledWrapper>
  );
};

export default CategoryItems;
