'use client';
import React, { useState } from 'react';
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
  StyledIconButton,
  StyledRightWrapper,
} from '@/app/ui/CategoryPage/CategoryPageStyles';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import BreadCrumbsDynamic from '@/app/ui/BreadCrumbsDynamic';

const CategoryPage = ({
  categoryName,
  products,
  priceRange,
  categoryId,
  paramsForCategory,
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <Content>
        <StyledWrapper>
          <BreadCrumbsDynamic />

          <StyledTitleBox>
            <PageTitle>{categoryName}</PageTitle>
          </StyledTitleBox>

          <StyledSelectedFiltersWrapper>
            {/* <SelectedFilters /> */}
            <StyledRightWrapper>
              <SortingProducts />
              <StyledIconButton onClick={toggleDrawer}>
                {openDrawer ? <FilterListOffIcon /> : <FilterListIcon />}
              </StyledIconButton>
            </StyledRightWrapper>
          </StyledSelectedFiltersWrapper>

          <StyledContentWrapper>
            <ProductFilter
              toggleDrawer={toggleDrawer}
              openDrawer={openDrawer}
              priceRange={priceRange}
              paramsForCategory={paramsForCategory}
              categoryId={categoryId}
            />
            <CategoryItems products={products} />
          </StyledContentWrapper>
        </StyledWrapper>
      </Content>
    </>
  );
};

export default CategoryPage;
