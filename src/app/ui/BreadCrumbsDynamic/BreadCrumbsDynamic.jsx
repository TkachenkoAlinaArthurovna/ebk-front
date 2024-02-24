'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { Breadcrumbs, Box } from '@mui/material';
import {
  StyledBreadcrumbLink,
  StyledBreadcrumbTypography,
} from '@/app/ui/BreadCrumbsDynamic/BreadCrumbsDynamicStyles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const BreadCrumbsDynamic = ({ currentProduct, partsOfCategory }) => {
  const selectedFilters = useSelector(
    (state) => state.productFilter.selectedFilters,
  );
  const categories = useSelector((state) => state.catalogLinks.catalogLinks);
  const getCategoryName = (category) => {
    const categoryName = categories.find(
      (item) => item.link === partsOfCategory[0],
    )?.name;
    return (
      categoryName.charAt(0).toUpperCase() + categoryName.slice(1).toLowerCase()
    );
  };

  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((path) => path);
  const decodedPathname = decodeURIComponent(pathnames[2]);

  const formattedString = selectedFilters.reduce((acc, obj) => {
    if (obj.paramValue) {
      if (acc) {
        return acc + ', ' + obj.paramValue;
      } else {
        return obj.paramValue;
      }
    } else {
      return acc;
    }
  }, '');

  return (
    <Box>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="medium" />}
      >
        <StyledBreadcrumbLink href="/">Головна</StyledBreadcrumbLink>
        {pathnames.length == 4 && (
          <StyledBreadcrumbLink href={`/${pathnames[0]}`}>
            {getCategoryName(pathnames[0])}
          </StyledBreadcrumbLink>
        )}
        {pathnames.length == 4 && (
          <StyledBreadcrumbLink
            href={`/${pathnames[0]}/${pathnames[1]}/${pathnames[2]}`}
          >
            {formattedString}
          </StyledBreadcrumbLink>
        )}
        {pathnames.length == 4 && (
          <StyledBreadcrumbTypography color="text.primary">
            {currentProduct.name}
          </StyledBreadcrumbTypography>
        )}
        {pathnames.length == 3 && (
          <StyledBreadcrumbLink href={`/${pathnames[0]}`}>
            {getCategoryName(pathnames[0])}
          </StyledBreadcrumbLink>
        )}
        {pathnames.length == 3 && (
          <StyledBreadcrumbTypography color="text.primary">
            {formattedString}
          </StyledBreadcrumbTypography>
        )}
        {pathnames.length < 2 ? (
          <StyledBreadcrumbTypography color="text.primary">
            {getCategoryName(pathnames[0])}
          </StyledBreadcrumbTypography>
        ) : pathnames.length == 2 ? (
          <StyledBreadcrumbLink href={`/${pathnames[0]}`}>
            {getCategoryName(pathnames[0])}
          </StyledBreadcrumbLink>
        ) : null}
        {pathnames.length == 2 && (
          <StyledBreadcrumbTypography color="text.primary">
            {currentProduct.name}
          </StyledBreadcrumbTypography>
        )}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadCrumbsDynamic;
