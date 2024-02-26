import React from 'react';
import { Skeleton, Box, styled } from '@mui/material';


const StyledWrapper = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: 16px;
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SkeletonCategoryItems = () => {
  return (
    <StyledWrapper>
      <Skeleton variant="rounded" sx={{ width: '300px', height: '420px' }} />
      <Skeleton variant="rounded" sx={{ width: '300px', height: '420px' }} />
      <Skeleton variant="rounded" sx={{ width: '300px', height: '420px' }} />
    </StyledWrapper>
  );
};
export default SkeletonCategoryItems;
