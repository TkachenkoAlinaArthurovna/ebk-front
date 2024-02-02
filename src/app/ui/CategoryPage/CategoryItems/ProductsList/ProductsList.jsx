'use client';

import React from 'react';
import ProductCard from '@/app/ui/ProductCard';

import { styled, Box } from '@mui/material';

const StyledWrapper = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const ProductsList = () => {
  const productCards = Array.from({ length: 12 }, (_, index) => (
    <ProductCard key={index} />
  ));

  return <StyledWrapper>{productCards}</StyledWrapper>;
};

export default ProductsList;
