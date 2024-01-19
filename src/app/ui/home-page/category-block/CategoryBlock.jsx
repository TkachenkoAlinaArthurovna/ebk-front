'use client';
import React from 'react';
import { Box } from '@mui/material';
import CategoryItem from '@/app/ui/home-page/category-block/CategoryItem';
import { categoryBlockMockData } from '@/app/lib/mockData';

const CategoryBlock = () => {
  const data = categoryBlockMockData;
  const categoryItems = data.map(({ name, img, url }) => {
    return (
      <CategoryItem key={url} img={`/images/${img}`} name={name} url={url} />
    );
  });

  return (
    <>
      <h2>Електровелосипеди</h2>
      <Box
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gridAutoRows={'1fr'}
        gap={'24px'}
      >
        {categoryItems}
      </Box>
    </>
  );
};

export default CategoryBlock;
