import React from 'react';
import CategoryItem from '@/app/ui/Homepage/CategoryBlock/CategoryItem';
import PageTitle from '@/app/ui/PageTitle';
import { categoryBlockData } from '@/app/lib/mockData';
import GridContainer from '@/app/ui/GridContainer/GridContainer';
import Content from '@/app/ui/Content';

const CategoryBlock = () => {
  const data = categoryBlockData;
  const categoryItems = data.map(({ name, img, url }) => {
    return (
      <CategoryItem key={url} img={`/images/${img}`} name={name} url={url} />
    );
  });

  return (
    <section>
      <Content>
        <PageTitle>Електровелосипеди</PageTitle>
        <GridContainer>{categoryItems}</GridContainer>
      </Content>
    </section>
  );
};

export default CategoryBlock;
