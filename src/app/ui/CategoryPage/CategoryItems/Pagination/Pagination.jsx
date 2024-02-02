'use client';

import React from 'react';
import { styled, Box } from '@mui/material';
import MuiPagination from '@mui/material/Pagination';

const StyledPagination = styled(MuiPagination)`
  margin-top: 84px;
  letter-spacing: 0.5px;
`;

const Pagination = () => {
  return <StyledPagination count={20} size="large" color="primary" />;
};

export default Pagination;
