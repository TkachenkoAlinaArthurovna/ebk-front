'use client';

import { useRef } from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import ProductCard from '@/app/ui/ProductCard';
import { SwiperPrev, SwiperNext } from '@/app/ui/Slider/SliderStyles';
import { Box } from '@mui/material';

import 'swiper/css';
import 'swiper/css/pagination';
import { reviewsBlockData as reviewsData } from '@/app/lib/mockData';
import CustomerReview from '@/app/ui/Homepage/ReviewsBlock/CustomerReview';

const productsArr = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

const Slider = ({
  autoplay,
  speed = 1000,
  spaceBetween,
  slidesPerView,
  pagination,
  products,
  slides,
  reviews,
  slidesProductPage,
}) => {
  const [swiper, setSwiper] = useState();
  let listProducts;
  let listSlides;
  let listReviews;
  let listSlidesProductPage;

  if (slidesProductPage) {
    listSlidesProductPage = slidesProductPage.map((slide, index) => (
      <SwiperSlide
        key={index}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src={slide}
          sx={{
            maxHeight: '500px',
            borderRadius: '28px',
            '@media (max-width: 1024px)': {
              maxHeight: '380px',
            },
            '@media (max-width: 500px)': {
              maxHeight: '300px',
            },
            '@media (max-width: 400px)': {
              maxHeight: '260px',
            },
          }}
        ></Box>
      </SwiperSlide>
    ));
  }
  if (slides) {
    listSlides = slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <img
          src={slide}
          style={{
            width: '100%',
            borderRadius: '28px',
          }}
        ></img>
      </SwiperSlide>
    ));
  }
  if (products) {
    listProducts = productsArr.map((product) => (
      <SwiperSlide key={product.id}>
        <ProductCard />
      </SwiperSlide>
    ));
  }
  if (reviews) {
    listReviews = reviewsData.map(({ id, date, firstName, lastName, text }) => (
      <SwiperSlide key={id}>
        <>
          <CustomerReview
            date={date}
            firstName={firstName}
            lastName={lastName}
            text={text}
          />
        </>
      </SwiperSlide>
    ));
  }

  let swiperConfig;

  if (products) {
    swiperConfig = {
      slidesPerView: 4,
      breakpoints: {
        300: {
          slidesPerView: 2,
        },
        685: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    };
  }

  if (reviews) {
    swiperConfig = {
      slidesPerView: 3,
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        650: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    };
  }

  return (
    <>
      <Swiper
        onSwiper={setSwiper}
        autoplay={autoplay}
        speed={speed}
        spaceBetween={spaceBetween}
        loop={true}
        pagination={pagination}
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        style={{
          height: '100%',
        }}
        {...swiperConfig}
      >
        {products && listProducts}
        {slides && listSlides}
        {reviews && listReviews}
        {slidesProductPage && listSlidesProductPage}
        {slidesProductPage && (
          <>
            <SwiperPrev
              onClick={() => swiper.slidePrev()}
              swipertype="productPage"
              component="img"
              alt="prev"
              src="/images/swiper/prev.png"
            />
            <SwiperNext
              onClick={() => swiper.slideNext()}
              swipertype="productPage"
              component="img"
              alt="next"
              src="/images/swiper/next.png"
            />
          </>
        )}
      </Swiper>
      {slides && (
        <>
          <SwiperPrev
            onClick={() => swiper.slidePrev()}
            swipertype="main"
            component="img"
            alt="prev"
            src="/images/swiper/prev.png"
          />
          <SwiperNext
            onClick={() => swiper.slideNext()}
            swipertype="main"
            component="img"
            alt="next"
            src="/images/swiper/next.png"
          />
        </>
      )}

      {(products || reviews) && (
        <>
          <SwiperPrev
            onClick={() => swiper.slidePrev()}
            swipertype="section"
            prevtype={products ? 'products' : 'reviews'}
            component="img"
            alt="prev"
            src="/images/swiper/prev.png"
          />
          <SwiperNext
            onClick={() => swiper.slideNext()}
            swipertype="section"
            nexttype={products ? 'products' : 'reviews'}
            component="img"
            alt="next"
            src="/images/swiper/next.png"
          />
        </>
      )}
    </>
  );
};

export default Slider;
