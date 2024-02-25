import React from 'react';
import { StyledWrapper } from '@/app/ui/CategoryPage/CategoryItems/CategoryItemsStyles';
import ProductsList from '@/app/ui/CategoryPage/CategoryItems/ProductsList';
import Pagination from '@/app/ui/CategoryPage/CategoryItems/Pagination';

const CategoryItems = ({ products, totalPage, categoryId, page }) => {
  return (
    <StyledWrapper>
      <ProductsList products={products} />
      <Pagination totalPage={totalPage} categoryId={categoryId} page={page} />
    </StyledWrapper>
  );
};

export default CategoryItems;
