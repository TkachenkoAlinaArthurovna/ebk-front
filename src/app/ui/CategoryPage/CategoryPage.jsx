'use client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usePathname } from 'next/navigation';

import { resetFilters } from '@/redux/slices/ProductFilterSlice';

import { useResize } from '@/app/lib/helpers';
import { getProducts } from '@/app/lib/getProducts';
import { getFilterProducts } from '@/app/lib/getFilterProducts';

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
  WrapperNoProducts,
} from '@/app/ui/CategoryPage/CategoryPageStyles';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import BreadCrumbsDynamic from '@/app/ui/BreadCrumbsDynamic';
import SkeletonBreadCrumbs from '@/app/ui/Skeletons/SkeletonBreadCrumbs';
import SkeletonPageTitle from '@/app/ui/Skeletons/SkeletonPageTitle';
import SkeletonCategoryItems from '@/app/ui/Skeletons/SkeletonCategoryItems';
import SkeletonProductFilter from '@/app/ui/Skeletons/SkeletonProductFilter';
import NotFound from '@/app/not-found';

export default function CategoryPage({
  partsOfCategory,
  categoryName,
  categoryId,
  price,
  filterParams,
  page,
  sortParam,
  vendorParam,
}) {
  const [products, setProducts] = useState(null);
  const [priceRange, setPriceRange] = useState([]);
  const [params, setParams] = useState([]);
  const [vendors, setVendors] = useState({});
  const [totalPage, setTotalPage] = useState(1);
  const [width] = useResize();
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((path) => path);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (products) {
      setLoading(false);
    }
  }, [products]);

  useEffect(() => {
    getProducts(
      categoryId,
      page,
      setLoading,
      width,
      sortParam,
      price,
      setProducts,
      setVendors,
      setTotalPage,
      setPriceRange,
      setParams,
    );
    if (price || filterParams) {
      getFilterProducts(
        categoryId,
        page,
        setLoading,
        width,
        sortParam,
        vendorParam,
        price,
        filterParams,
        setProducts,
        setVendors,
        setTotalPage,
      );
    }
  }, []);

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

  return (
    <>
      {!products && loading == true && (
        <Content>
          <StyledWrapper>
            <SkeletonBreadCrumbs />
            <StyledTitleBox>
              <SkeletonPageTitle />
            </StyledTitleBox>
            <StyledSelectedFiltersWrapper
              sx={
                pathnames.length == 1
                  ? { justifyContent: 'end' }
                  : { justifyContent: 'space-between' }
              }
            >
              <StyledRightWrapper>
                <SortingProducts />
              </StyledRightWrapper>
            </StyledSelectedFiltersWrapper>
            <StyledContentWrapper>
              <SkeletonProductFilter />
              <SkeletonCategoryItems />
            </StyledContentWrapper>
          </StyledWrapper>
        </Content>
      )}
      {!products && loading == false && <NotFound />}
      {products && (
        <Content>
          <StyledWrapper>
            <BreadCrumbsDynamic partsOfCategory={partsOfCategory} />

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
                  {openDrawer ? <FilterAltOffIcon /> : <FilterAltIcon />}
                </StyledIconButton>
              </StyledRightWrapper>
            </StyledSelectedFiltersWrapper>

            <StyledContentWrapper>
              <ProductFilter
                toggleDrawer={toggleDrawer}
                openDrawer={openDrawer}
                priceRange={priceRange}
                paramsForCategory={params}
                vendors={vendors}
                categoryId={categoryId}
              />
              {products.length > 0 && (
                <CategoryItems
                  products={products}
                  totalPage={totalPage}
                  categoryId={categoryId}
                  page={page}
                />
              )}
              {products.length == 0 && (
                <WrapperNoProducts>
                  По таким фільтрам товарів немає
                </WrapperNoProducts>
              )}
            </StyledContentWrapper>
          </StyledWrapper>
        </Content>
      )}
    </>
  );
}
