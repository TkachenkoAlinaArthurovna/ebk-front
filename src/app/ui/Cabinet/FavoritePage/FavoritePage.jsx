'use client';

import React from 'react';
import { useResize } from '@/app/lib/helpers';
import PageTitle from '@/app/ui/PageTitle';
import ProductCard from '@/app/ui/ProductCard';
import { mockDataFavorites } from '@/app/lib/mockDataFavorites';
import {
  Wrapper,
  ProductList,
  StyledPagination,
} from '@/app/ui/Cabinet/FavoritePage/FavoritePageStyles';

const FavoritePage = () => {
  const [width] = useResize();

  const handlePageChange = (event, page) => {
    console.log('Сторінка:', page);
  };

  const favoriteProducts = mockDataFavorites.results.map((product) => (
    <ProductCard key={product._id} product={product} />
  ));

  return (
    <Wrapper>
      <PageTitle>Обране</PageTitle>
      <ProductList>{favoriteProducts}</ProductList>
      <StyledPagination
        count={10}
        color="primary"
        size={width > 500 ? 'large' : 'small'}
        onChange={handlePageChange}
      />
    </Wrapper>
  );
};

export default FavoritePage;
