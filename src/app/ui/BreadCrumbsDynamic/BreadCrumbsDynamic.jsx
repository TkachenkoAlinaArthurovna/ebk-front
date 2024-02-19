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

const BreadCrumbsDynamic = ({ currentProduct }) => {
  const categories = useSelector((state) => state.catalogLinks.catalogLinks);

  const getCategoryName = (category) => {
    const categoryName = categories.find(
      (item) => item.link === category,
    )?.name;
    return (
      categoryName.charAt(0).toUpperCase() + categoryName.slice(1).toLowerCase()
    );
  };

  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((path) => path);

  return (
    <Box>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="medium" />}
      >
        <StyledBreadcrumbLink href="/">Головна</StyledBreadcrumbLink>
        {pathnames.length < 2 ? (
          <StyledBreadcrumbTypography color="text.primary">
            {getCategoryName(pathnames[0])}
          </StyledBreadcrumbTypography>
        ) : (
          <StyledBreadcrumbLink href={`/${pathnames[0]}`}>
            {getCategoryName(pathnames[0])}
          </StyledBreadcrumbLink>
        )}
        {pathnames.length > 1 && (
          <StyledBreadcrumbTypography color="text.primary">
            {currentProduct.name}
          </StyledBreadcrumbTypography>
        )}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadCrumbsDynamic;
