import React from 'react';
import GridContainer from '@/app/ui/GridContainer/GridContainer';
import CategoryItem from '@/app/ui/Homepage/CategoryBlock/CategoryItem';
import PageTitle from '@/app/ui/PageTitle';
import Content from '@/app/ui/Content';
import { categoryBlockData } from '@/app/lib/mockData';
import { StyledContainer } from '@/app/ui/Homepage/CategoryBlock/CategoryBlockStyles';

const CategoryBlock = () => {
  const data = categoryBlockData;
  const categoryItems = data.map(({ name, img, url }) => {
    return (
      <CategoryItem key={url} img={`/images/${img}`} name={name} url={url} />
    );
  });

  return (
    <StyledContainer as="section">
      <Content>
        <PageTitle>Електровелосипеди</PageTitle>
        <GridContainer>{categoryItems}</GridContainer>
      </Content>
    </StyledContainer>
  );
};

export default CategoryBlock;
