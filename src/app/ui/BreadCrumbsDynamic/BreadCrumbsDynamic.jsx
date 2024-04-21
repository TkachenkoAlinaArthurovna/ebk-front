'use client';

import React from 'react';
import { useEffect, useState } from 'react';
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
  const [categoryName, setCategoryName] = useState('');
  const [formattedString, setFormattedString] = useState('');
  const [pathnames, setPathnames] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    const pathnames = pathname.split('/').filter((path) => path);
    setPathnames(pathnames);

    const getCategoryName = (category) => {
      const foundCategory = categories.find(
        (item) => item.link === partsOfCategory[0],
      );
      if (foundCategory) {
        return (
          foundCategory.name.charAt(0).toUpperCase() +
          foundCategory.name.slice(1).toLowerCase()
        );
      }
      return '';
    };

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

    setFormattedString(formattedString);

    if (pathnames.length > 0 && partsOfCategory.length > 0) {
      setCategoryName(getCategoryName(partsOfCategory[0]));
    }
  }, []);

  return (
    <Box>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="medium" />}
      >
        <StyledBreadcrumbLink href="/">Головна</StyledBreadcrumbLink>
        {pathnames.length == 4 && (
          <StyledBreadcrumbLink href={`/${pathnames[0]}`}>
            {categoryName}
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
            {categoryName}
          </StyledBreadcrumbLink>
        )}
        {pathnames.length == 3 && (
          <StyledBreadcrumbTypography color="text.primary">
            {formattedString}
          </StyledBreadcrumbTypography>
        )}
        {pathnames.length < 2 ? (
          <StyledBreadcrumbTypography color="text.primary">
            {categoryName}
          </StyledBreadcrumbTypography>
        ) : pathnames.length == 2 ? (
          <StyledBreadcrumbLink href={`/${pathnames[0]}`}>
            {categoryName}
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
