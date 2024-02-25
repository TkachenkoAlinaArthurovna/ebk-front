'use client';

import React, { useState } from 'react';
import { styled } from '@mui/material';
import MuiPagination from '@mui/material/Pagination';
import { useResize } from '@/app/lib/helpers';

const StyledPagination = styled(MuiPagination)`
  margin-top: 84px;
  letter-spacing: 0.5px;
`;

const Pagination = () => {
  const [width] = useResize();
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    console.log(value);
    setPage(value);
  };

  return (
    <StyledPagination
      count={20}
      size={width > 500 ? 'large' : 'small'}
      color="primary"
      onChange={handleChange}
    />
  );
};

export default Pagination;
