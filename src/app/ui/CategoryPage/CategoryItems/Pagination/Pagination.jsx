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

  const removePageParams = (str) => {
    const index = str.indexOf('&page=');
    if (index !== -1) {
      return str.substring(0, index);
    }
    return str;
  };

  const handleChange = (event, value) => {
    if (pathnames.length == 1) {
      if (value == 1) {
        router.push(`/${removePageParams(pathnames[0])}`);
      }
      if (value == page) {
      } else {
        router.push(`/${removePageParams(pathnames[0])}&page=${value}`);
      }
    } else {
      if (value == 1) {
        console.log(pathnames[2]);
        router.push(
          `/${pathnames[0]}/${pathnames[1]}/${removePageParams(pathnames[2])}`,
        );
      }
      if (value == page) {
      } else {
        router.push(
          `/${pathnames[0]}/${pathnames[1]}/${removePageParams(pathnames[2])}&page=${value}`,
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
