'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCategoryId } from '@/redux/slices/ProductFilterSlice';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import {
  addProductToFilter,
  addSelectedPrice,
} from '@/redux/slices/ProductFilterSlice';
import FilterByPrice from '@/app/ui/CategoryPage/ProductFilter/FilterByPrice';
import FilterParam from '@/app/ui/CategoryPage/ProductFilter/FilterParam';
import {
  StyledWrapper,
  StyledSubstrate,
  StyledButton,
  StyledWrapperSide,
  StyledHeadFilter,
} from '@/app/ui/CategoryPage/ProductFilter/ProductsFilterStyles';
import CloseIcon from '@mui/icons-material/Close';
import { Drawer, IconButton, Typography } from '@mui/material';
import { dollar } from '@/app/lib/dollar';
import { generateQueryString } from '@/app/lib/getFilterParams';

const ProductFilter = ({
  toggleDrawer,
  openDrawer,
  priceRange,
  paramsForCategory,
  categoryId,
  vendors,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((path) => path);
  const dispatch = useDispatch();
  const categoryProductsPrice = priceRange;
  const minPriceArr = useSelector((state) => state.productFilter.minPrice);
  const maxPriceArr = useSelector((state) => state.productFilter.maxPrice);
  const minPrice = () => {
    const obj = minPriceArr.find((item) => item.category === categoryId);
    const value = obj ? obj.value : Math.min(...categoryProductsPrice);
    return value;
  };
  const maxPrice = () => {
    const obj = maxPriceArr.find((item) => item.category === categoryId);
    const value = obj ? obj.value : Math.max(...categoryProductsPrice);
    return value;
  };

  const checkedFilters = useSelector(
    (state) => state.productFilter.checkedFilters,
  );

  function multiplyAndRoundUp(array, multiplier) {
    return array.map((number) => Math.ceil(number * multiplier));
  }

  const updatedFilters = [...checkedFilters];
  const selectedPrice = { paramValue: `${minPrice()}-${maxPrice()} грн.` };

  function removeQueryString(url) {
    const index = url.indexOf('&');
    if (index !== -1) {
      return url.substring(0, index);
    }
    return url;
  }

  const handleFilterClick = () => {
    dispatch(
      addSelectedPrice({ paramValue: `${minPrice()}-${maxPrice()} грн.` }),
    );
    dispatch(addProductToFilter(updatedFilters));
    dispatch(addCategoryId(categoryId));
  };

  const handleClick = () => {
    const newUpdatedFilters = [selectedPrice, ...updatedFilters];
    const queryString = generateQueryString(newUpdatedFilters);
    const urlComponent = encodeURIComponent(queryString);

    pathnames.length > 2
      ? router.push(
          `/${removeQueryString(pathnames[0])}/filter/${urlComponent}`,
        )
      : router.push(`${removeQueryString(pathname)}/filter/${urlComponent}`);
  };

  const filterParams = paramsForCategory.map(({ name, values }) => {
    if (name[0] == 'Color') {
      return;
    }
    return <FilterParam key={name[0]} paramName={name} paramValues={values} />;
  });

  return (
    <>
      <StyledWrapper>
        <FilterByPrice
          priceRange={multiplyAndRoundUp(priceRange, dollar)}
          categoryId={categoryId}
        />
        {filterParams}
        {vendors.values.length > 1 && (
          <FilterParam paramName={vendors.name} paramValues={vendors.values} />
        )}
        <StyledSubstrate>
          <StyledButton
            onClick={() => {
              handleFilterClick();
              handleClick();
            }}
          >
            Застосувати фільтри
          </StyledButton>
        </StyledSubstrate>
      </StyledWrapper>
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
        <StyledWrapperSide>
          <StyledHeadFilter>
            <Typography
              sx={{ padding: '16px', fontSize: '22px', fontWeight: '500' }}
            >
              Фільтри
            </Typography>
            <IconButton onClick={toggleDrawer} sx={{ padding: '16px' }}>
              <CloseIcon />
            </IconButton>
          </StyledHeadFilter>
          <FilterByPrice
            priceRange={multiplyAndRoundUp(priceRange, dollar)}
            categoryId={categoryId}
          />
          {filterParams}
          <StyledSubstrate>
            <StyledButton
              onClick={() => {
                handleFilterClick();
                handleClick();
              }}
            >
              Застосувати фільтри
            </StyledButton>
          </StyledSubstrate>
        </StyledWrapperSide>
      </Drawer>
    </>
  );
};

export default ProductFilter;
