'use client';

import React from 'react';
import { Breadcrumbs, Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import {
  StyledBreadcrumbLink,
  StyledBreadcrumbTypography,
} from '@/app/ui/BreadCrumbs/BreadCrumbsStyles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { navigation } from '@/app/lib/mockData';

const BreadCrumbs = () => {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((path) => path);

  return (
    <Box sx={{ marginBottom: '20px' }}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="medium" />}
      >
        <StyledBreadcrumbLink href="/">Головна</StyledBreadcrumbLink>
        {pathnames.map((path, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          let title = path;
          let isCabinet = false;

          const matchingNavItem = navigation.find((item) => item.path === path);
          if (matchingNavItem) {
            title = matchingNavItem.title;
            isCabinet = matchingNavItem.path === 'cabinet';
          }

          return last ? (
            <StyledBreadcrumbTypography key={to} color="text.primary">
              {title}
            </StyledBreadcrumbTypography>
          ) : isCabinet ? (
            <StyledBreadcrumbTypography key={to} color="text.primary">
              {title}
            </StyledBreadcrumbTypography>
          ) : (
            <StyledBreadcrumbLink key={to} href={to}>
              {title}
            </StyledBreadcrumbLink>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadCrumbs;
