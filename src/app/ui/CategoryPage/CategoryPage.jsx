'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryProducts } from '@/redux/slices/CategoryProductsSlice';
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

const CategoryPage = ({ categoryName, products }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCategoryProducts(products));
  }, [products]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

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
            />
            <CategoryItems />
          </StyledContentWrapper>
        </StyledWrapper>
      </Content>
    </>
  );
};

export default CategoryPage;
