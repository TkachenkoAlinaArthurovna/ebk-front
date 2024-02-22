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
          sx={{ width: '700px', height: '24px', marginBottom: '30px' }}
        />
        <Skeleton
          variant="text"
          sx={{ width: '266px', fontSize: '28px', marginBottom: '30px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Skeleton
            variant="rounded"
            sx={{ width: '400px', height: '24px', marginBottom: '30px' }}
          />
          <Skeleton variant="rounded" sx={{ width: '215px', height: '24px' }} />
        </div>
        <div style={{ display: 'grid', gridAutoColumns: '1fr 3fr' }}>
          <Skeleton
            sx={{
              width: '387px',
              height: '1298px',
            }}
          />
          <Skeleton sx={{ width: '941px', height: '1298px' }} />
        </div>
      </Content>
    </>
  );
};
export default SkeletonCategoryPage;
