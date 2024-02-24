'use client';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usePathname } from 'next/navigation';
import { resetFilters } from '@/redux/slices/ProductFilterSlice';
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
import { useResize } from '@/app/lib/helpers';
import SkeletonCategoryPage from '@/app/ui/SkeletonCategoryPage/SkeletonCategoryPage';
import SkeletonBreadCrumbs from '@/app/ui/Skeletons/SkeletonBreadCrumbs';
import SkeletonPageTitle from '@/app/ui/Skeletons/SkeletonPageTitle';
import SkeletonCategoryItems from '@/app/ui/Skeletons/SkeletonCategoryItems';
import SkeletonProductFilter from '@/app/ui/Skeletons/SkeletonProductFilter';

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
  const limit = width > 700 ? 9 : 10;
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((path) => path);

  const getProducts = async () => {
    try {
      let res;
      const sort = sortParam ? `sort=${sortParam}&` : '';
      const vendor = vendorParam ? `vendor=${vendorParam}&` : '';
      if (!price && !filterParams) {
        res = await fetch(
          `https://stage.eco-bike.com.ua/api/catalog/${categoryId}?${sort}page=${page}&limit=${limit}`,
          { next: { revalidate: 3600 } },
        );
      }
      if (price || filterParams) {
        res = await fetch(
          `https://stage.eco-bike.com.ua/api/catalog/${categoryId}${!filterParams == '' ? '/' + filterParams : ''}?${vendor}${sort}price=${price}&page=${page}&limit=${limit}`,
          { next: { revalidate: 3600 } },
        );
      }
      if (res) {
        const data = await res.json();
        console.log(data);
        if (data) {
          setProducts(data.results);
          setPriceRange(data.priceRange);
          setParams(!filterParams ? data.params : data.productsParams);
          const duplicateArray = data.vendors.map((vendor) => [vendor, vendor]);
          const vendorsObj = {
            name: ['Vendor', 'Виробник'],
            values: duplicateArray,
          };
          setVendors(vendorsObj);
          setTotalPage(data.meta.totalPages);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
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
      {!products && (
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
              <SkeletonProductFilter />
              <SkeletonCategoryItems />
            </StyledContentWrapper>
          </StyledWrapper>
        </Content>
      )}
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
                  {openDrawer ? <FilterListOffIcon /> : <FilterListIcon />}
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
              <CategoryItems
                products={products}
                totalPage={totalPage}
                categoryId={categoryId}
                page={page}
              />
            </StyledContentWrapper>
          </StyledWrapper>
        </Content>
      )}
    </>
  );
}
