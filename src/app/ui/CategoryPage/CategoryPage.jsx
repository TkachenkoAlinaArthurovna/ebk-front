'use client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetFilters } from '@/redux/slices/ProductFilterSlice';
import { usePathname } from 'next/navigation';
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
  const currentCategoryId = useSelector(
    (state) => state.productFilter.categoryId,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentCategoryId !== categoryId) {
      dispatch(resetFilters());
    }
  }, [categoryId]);

  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((path) => path);

  return (
    <>
      <Content>
        <StyledWrapper>
          <BreadCrumbsDynamic paramsForCategory={paramsForCategory} />

          <StyledTitleBox>
            <PageTitle>{categoryName}</PageTitle>
          </StyledTitleBox>

          <StyledSelectedFiltersWrapper
            sx={
              pathnames.length == 1
                ? { justifyContent: 'end' }
                : { justifyContent: 'space-between' }
            }
          >
            {pathnames.length > 1 && (
              <SelectedFilters
                categoryId={categoryId}
                priceRange={priceRange}
              />
            )}
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
