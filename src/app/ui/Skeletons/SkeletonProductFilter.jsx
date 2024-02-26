import React from 'react';
import { Skeleton } from '@mui/material';
import {
  StyledWrapper,
  StyledSubstrate,
  StyledButton,
} from '@/app/ui/CategoryPage/ProductFilter/ProductsFilterStyles';

const SkeletonProductFilter = () => {
  return (
    <>
      <StyledWrapper>
        <Skeleton
          sx={{
            width: '320px',
            height: '100%',
            marginRight: '30px',
          }}
        />
        <StyledSubstrate>
          <StyledButton>Застосувати фільтри</StyledButton>
        </StyledSubstrate>
      </StyledWrapper>
    </>
  );
};
export default SkeletonProductFilter;
