'use client';

import { styled, Link, Typography } from '@mui/material';

export const StyledBreadcrumbLink = styled(Link)`
  font-size: 16px;
  color: #6a6a6a;
  text-decoration: none;

  &:hover {
    color: #49beb7;
  }
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

export const StyledBreadcrumbTypography = styled(Typography)`
  font-weight: 400;
  font-size: 16px;
  color: #212121;
  @media (max-width: 400px) {
    font-size: 12px;
  }
`;