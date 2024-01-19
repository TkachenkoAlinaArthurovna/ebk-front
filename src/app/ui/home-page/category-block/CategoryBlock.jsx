'use client';
import React from 'react';
import { styled, Box } from '@mui/material';
import CategoryItem from '@/app/ui/home-page/category-block/CategoryItem';
import PageTitle from '@/app/ui/PageTitle';
import { categoryBlockData } from '@/app/lib/mockData';

export const StyledGridContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  gap: 24px;
  margin-top: 24px;
`;

const CategoryBlock = () => {
  const data = categoryBlockData;
  const categoryItems = data.map(({ name, img, url }) => {
    return (
      <CategoryItem key={url} img={`/images/${img}`} name={name} url={url} />
    );
  });

  return (
    <>
      <PageTitle>Електровелосипеди</PageTitle>
      <StyledGridContainer>{categoryItems}</StyledGridContainer>
    </>
  );
};

export default CategoryBlock;
