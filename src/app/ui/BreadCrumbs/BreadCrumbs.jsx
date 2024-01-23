'use client';

import { Breadcrumbs, Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import {
  StyledBreadcrumbLink,
  StyledBreadcrumbTypography,
} from '@/app/ui/BreadCrumbs/BreadCrumbsStyles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Content from '../Content';
import { navigation } from '@/app/lib/mockData';

const BreadCrumbs = () => {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((path) => path);

  return (
    <Box>
      <Content>
              <Breadcrumbs
            aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="medium" />}
          >
          <StyledBreadcrumbLink href="/">Головна</StyledBreadcrumbLink>
            {pathnames.map((path, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              const title = navigation.find((item) => item.path === path).title;

              return last ? (
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
      </Content>
    </Box>
  );
};

export default BreadCrumbs;
