'use client';

import React from 'react';
import { useResize } from '@/app/lib/helpers';
import { useSelector } from 'react-redux';
import PageTitle from '@/app/ui/PageTitle';
import ProductCard from '@/app/ui/ProductCard';
import {
  Wrapper,
  ProductList,
  StyledPagination,
} from '@/app/ui/Cabinet/FavoritePage/FavoritePageStyles';
import EmptyFavorites from '@/app/ui/Cabinet/FavoritePage/EmptyFavorites/EmptyFavorites';

const FavoritePage = () => {
  const [width] = useResize();

  const handlePageChange = (event, page) => {
    console.log('Сторінка:', page);
  };

  const favorites = useSelector((state) => state.favorites.favorites);

  const favoriteProducts = favorites.map((product) => (
    <ProductCard key={product._id} product={product} />
  ));

  return (
    <Wrapper>
      <PageTitle>Обране</PageTitle>
      {favorites.length == 0 ? (
        <EmptyFavorites />
      ) : (
        <ProductList>{favoriteProducts}</ProductList>
      )}
      {/* <StyledPagination
        count={10}
        color="primary"
        size={width > 500 ? 'large' : 'small'}
        onChange={handlePageChange}
      /> */}
    </Wrapper>
  );
};

export default FavoritePage;
