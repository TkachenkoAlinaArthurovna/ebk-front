import React from 'react';
import { Skeleton } from '@mui/material';

const SkeletonPageTitle = () => {
  return (
    <Skeleton
      variant="rounded"
      sx={{ width: '266px', height: '28px', marginBottom: '30px' }}
    />
  );
};
export default SkeletonPageTitle;
