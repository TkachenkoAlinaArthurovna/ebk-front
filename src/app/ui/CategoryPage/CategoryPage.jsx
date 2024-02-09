import React from 'react';
import Content from '@/app/ui/Content';
import PageTitle from '@/app/ui/PageTitle';
import SelectedFilters from '@/app/ui/CategoryPage/SelectedFilters';
import SortingProducts from '@/app/ui/CategoryPage/SortingProducts';
import ProductFilter from '@/app/ui/CategoryPage/ProductFilter';
import CategoryItems from '@/app/ui/CategoryPage/CategoryItems';
import {
  StyledWrapper,
  StyledTitleBox,
  StyledSelectedFiltersWrapper,
  StyledContentWrapper,
} from '@/app/ui/CategoryPage/CategoryPageStyles';

const CategoryPage = ({ categoryName }) => {
  return (
    <>
      <Content>
        <StyledWrapper>
          <p>Bread Crumbs</p>

          <StyledTitleBox>
            <PageTitle>{categoryName}</PageTitle>
          </StyledTitleBox>

          <StyledSelectedFiltersWrapper>
            <SelectedFilters />
            <SortingProducts />
          </StyledSelectedFiltersWrapper>

          <StyledContentWrapper>
            <ProductFilter />
            <CategoryItems />
          </StyledContentWrapper>
        </StyledWrapper>
      </Content>
    </>
  );
};

export default CategoryPage;
