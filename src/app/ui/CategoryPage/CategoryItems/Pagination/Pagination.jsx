'use client';

import React from 'react';
import { useResize } from '@/app/lib/helpers';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { styled } from '@mui/material';
import MuiPagination from '@mui/material/Pagination';

const StyledPagination = styled(MuiPagination)`
  margin-top: 84px;
  letter-spacing: 0.5px;
`;

const Pagination = ({ totalPage, page }) => {
  const router = useRouter();
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((path) => path);
  const [width] = useResize();

  const handleChange = (event, value) => {
    if (pathnames.length == 1) {
      if (value == 1) {
        router.push(`/${pathnames[0].split('&')[0]}`);
      }
      if (value == page) {
      } else {
        router.push(`/${pathnames[0].split('&')[0]}&page=${value}`);
      }
    } else {
      console.log(pathnames);
      if (value == 1) {
        router.push(
          `/${pathnames[0]}/${pathnames[1]}/${pathnames[2].split('&')[0]}`,
        );
      }
      if (value == page) {
      } else {
        router.push(
          `/${pathnames[0]}/${pathnames[1]}/${pathnames[2].split('&')[0]}&page=${value}`,
        );
      }
    }
  };

  return (
    totalPage > 1 && (
      <StyledPagination
        page={parseInt(page)}
        count={totalPage}
        size={width > 500 ? 'large' : 'small'}
        color="primary"
        onChange={handleChange}
      />
    )
  );
};

export default Pagination;
