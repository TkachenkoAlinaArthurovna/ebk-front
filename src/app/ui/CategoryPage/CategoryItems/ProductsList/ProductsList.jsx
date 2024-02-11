'use client';

import React from 'react';
import ProductCard from '@/app/ui/ProductCard';

import { styled, Box } from '@mui/material';

const StyledWrapper = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 380px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProductsList = () => {
  const productCards = Array.from({ length: 12 }, (_, index) => (
    <ProductCard key={index} />
  ));

  return <StyledWrapper>{productCards}</StyledWrapper>;
};

export default ProductsList;
