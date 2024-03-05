'use client';
import React from 'react';
import ProductCard from '@/app/ui/ProductCard';
import { styled, Box } from '@mui/material';

const StyledWrapper = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  gap: 16px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 685px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ViewedList = ({ products }) => {
  const productCards = products.map((product) => {
    return <ProductCard key={product._id} product={product} />;
  });

  return <StyledWrapper>{productCards}</StyledWrapper>;
};

export default ViewedList;
