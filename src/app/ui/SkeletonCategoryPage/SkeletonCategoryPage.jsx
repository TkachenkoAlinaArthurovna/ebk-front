import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Content from '@/app/ui/Content';
import { StyledDiv } from '@/app/ui/SkeletonProductPage/SkeletonProductPageStyled';

const SkeletonCategoryPage = () => {
  return (
    <>
      <Content>
        <Skeleton
          variant="rounded"
          sx={{ width: '200px', height: '24px', marginBottom: '30px' }}
        />
        <Skeleton
          variant="rounded"
          sx={{ width: '266px', height:'28px', marginBottom: '30px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Skeleton
            variant="rounded"
            sx={{ width: '400px', height: '24px', marginBottom: '30px' }}
          />
          <Skeleton variant="rounded" sx={{ width: '215px', height: '24px' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Skeleton
            sx={{
              width: '25%',
              height: '600px',
              marginRight: '30px'
            }}
          />
          <Skeleton sx={{ width: '75%', height: '600px'}} />
        </div>
      </Content>
    </>
  );
};
export default SkeletonCategoryPage;
