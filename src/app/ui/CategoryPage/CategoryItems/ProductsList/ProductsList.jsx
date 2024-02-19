'use client';

import React from 'react';
import ProductCard from '@/app/ui/ProductCard';

import { styled, Box } from '@mui/material';

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

const ProductsList = ({ products }) => {
  const productCards = products.map((product) => {
    return <ProductCard key={product._id} product={product} />;
  });

  return <StyledWrapper>{productCards}</StyledWrapper>;
};

export default ProductsList;
