import React from 'react';
import { Skeleton } from '@mui/material';

const SkeletonBreadCrumbs = () => {
  return (
    <Skeleton
      variant="rounded"
      sx={{ width: '200px', height: '24px', marginBottom: '30px' }}
    />
  );
};
export default SkeletonBreadCrumbs;
