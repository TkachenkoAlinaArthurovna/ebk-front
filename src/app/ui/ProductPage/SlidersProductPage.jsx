'use client';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PageTitle from '@/app/ui/PageTitle';
import { StyledSection } from '@/app/ui/ProductPage/ProductPageStyles';
import { Box, Typography } from '@mui/material';
import Slider from '@/app/ui/Slider';
import Content from '@/app/ui/Content';
import ProductsList from '@/app/ui/CategoryPage/CategoryItems/ProductsList';
import { Swiper, SwiperSlide } from 'swiper/react';
import { createLinkProduct } from '@/app/lib/createLinkProduct';

const SlidersProductPage = ({ filteredArr }) => {
  console.log(filteredArr);
  const exclusiveProducts = [
    {
      categoryName: 'fatbike',
      name: 'Електровелосипед 26-4.0 FAT BIKE Jaguar 1200 W 13 Ah 48 V',
      picture: [
        'https://images.prom.ua/4668959288_elektrovelosiped-26-40-fat.jpg',
      ],
      price: 1037,
      params: [
        { name: ['Color', 'Колір'], value: ['Black/Yellow', 'Чорний/Жовтий'] },
      ],
      _id: '65e3da9bb10bdad747be8844',
    },
    {
      categoryName: 'fatbike',
      name: 'Електровелосипед 26-4.0 FAT BIKE AVALON 1200W 13Ah 48V',
      picture: [
        'https://images.prom.ua/4655286062_elektrovelosiped-26-40-fat.jpg',
      ],
      price: 1080,
      params: [{ name: ['Color', 'Колір'], value: ['Black', 'Чорний'] }],
      _id: '65e3da9bb10bdad747be8845',
    },
    {
      categoryName: 'hirski-elektrovelosypedy',
      name: 'Електровелосипед 27.5+ Boost 1000W 18 Ah 48V',
      picture: [
        'https://images.prom.ua/4466800215_elektrovelosiped-275-boost.jpg',
      ],
      price: 1372,
      params: [
        { name: ['Color', 'Колір'], value: ['Black/Red', 'Чорний/Червоний'] },
      ],
      _id: '65e3da9bb10bdad747be882f',
    },
    {
      categoryName: 'hirski-elektrovelosypedy',
      name: 'Електровелосипед Hammer 27.5" 1000W 13Ah 48V',
      picture: [
        'https://images.prom.ua/4622222852_elektrovelosiped-hammer-275.jpg',
      ],
      price: 1057,
      params: [
        { name: ['Color', 'Колір'], value: ['Black/Blue', 'Чорний/Синій'] },
      ],
      _id: '65e3da9bb10bdad747be882b',
    },
    {
      categoryName: 'akumuliatory',
      name: 'Акумулятор для електровелосипеда DS 48V 7.8 Ah',
      picture: [
        'https://images.prom.ua/4400023425_akumulyator-dlya-elektrovelosipeda.jpg',
      ],
      price: 300,
      params: [],
      _id: '65e3da9bb10bdad747be8818',
    },
  ];
  return (
    <StyledSection as="section">
      <Content>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ marginBottom: '24px' }}>
            <PageTitle>Переглянуті товари</PageTitle>
          </Box>
          <Box>
            <Slider
              autoplay={false}
              spaceBetween="16px"
              slidesPerView="4"
              pagination={false}
              products={exclusiveProducts}
            />
          </Box>
        </Box>
      </Content>
    </StyledSection>
  );
};

export default SlidersProductPage;
