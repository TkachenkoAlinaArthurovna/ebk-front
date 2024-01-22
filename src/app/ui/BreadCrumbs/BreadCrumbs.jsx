'use client';

import { Breadcrumbs, Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import {
  StyledBreadcrumbLink,
  StyledBreadcrumbTypography,
} from '@/app/ui/BreadCrumbs/BreadCrumbsStyles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const BreadCrumbs = () => {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((path) => path);

  const navigation = [
    { id: 1, title: 'Каталог товарів', path: 'catalog' },
    { id: 2, title: 'Кошик', path: 'cart' },
    { id: 3, title: 'Обране', path: 'favorite' },
    { id: 4, title: 'Компанія', path: 'about' },
    { id: 5, title: 'Про нас', path: 'about' },
    { id: 6, title: 'Контакти', path: 'contacts' },
    { id: 7, title: 'Відгуки', path: 'reviews' },
    { id: 8, title: 'Допомога', path: 'support' },
    { id: 9, title: 'Оплата та доставка', path: 'about' },
    { id: 10, title: 'Повернення товару', path: 'about' },
    { id: 11, title: 'Підтримка', path: 'about' },
    { id: 12, title: 'Особистий кабінет', path: 'cabinet' },
    { id: 13, title: 'Замовлення', path: 'orders' },
  ];

  return (
    <Box>
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
    </Box>
  );
};

export default BreadCrumbs;
