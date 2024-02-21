import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Content from '@/app/ui/Content';
import { StyledDiv } from '@/app/ui/SkeletonProductPage/SkeletonProductPageStyled';

const SkeletonProductPage = () => {
  return (
    <>
      <Content>
        <Skeleton
          variant="rounded"
          sx={{ width: '700px', height: '24px', marginBottom: '30px' }}
        />
        <div style={{ display: 'flex' }}>
          <Skeleton
            sx={{ marginRight: '30px' }}
            variant="rounded"
            width={150}
            height={35}
          />
          <Skeleton
            sx={{ marginRight: '30px' }}
            variant="rounded"
            width={150}
            height={35}
          />
          <Skeleton
            sx={{ marginRight: '30px' }}
            variant="rounded"
            width={150}
            height={35}
          />
        </div>
        <StyledDiv>
          <Skeleton
            sx={{ margin: '40px 60px 0 0' }}
            variant="rounded"
            width={625}
            height={500}
          />
          <div>
            <Skeleton
              sx={{ marginTop: '25px' }}
              variant="rounded"
              width={518}
              height={80}
            />
            <Skeleton
              sx={{ marginTop: '35px' }}
              variant="rounded"
              width={111}
              height={42}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Skeleton
                sx={{ marginTop: '35px' }}
                variant="rounded"
                width={560}
                height={56}
              />
              <Skeleton
                sx={{ margin: '35px 0 0 20px' }}
                variant="circular"
                width={56}
                height={56}
              />
            </div>
            <Skeleton
              sx={{ marginTop: '35px' }}
              variant="rounded"
              width={200}
              height={10}
            />
            <Skeleton
              sx={{ marginTop: '35px' }}
              variant="rounded"
              width={500}
              height={10}
            />
          </div>
        </StyledDiv>
      </Content>
    </>
  );
};
export default SkeletonProductPage;
