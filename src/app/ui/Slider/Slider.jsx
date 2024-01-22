'use client';

import { useRef } from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import ProductCard from '@/app/ui/ProductCard';
import {
  SwiperPrev,
  SwiperNext,
  MainSwiperPrev,
  MainSwiperNext,
} from '@/app/ui/Slider/SliderStyles';
// import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import { reviewsBlockData as reviewsData } from '@/app/lib/mockData';
// import CustomerReview from '@/app/ui/Homepage/ReviewsBlock/CustomerReview';
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
}) => {
  const [swiper, setSwiper] = useState();
  let listProducts;
  let listSlides;
  let listReviews;

  if (slides) {
    listSlides = slides.map((slide, index) => (
      <SwiperSlide key={index}>
        {/* <Image
          src={slide}
          fill
          style={{
            objectFit: 'contain',
          }}
        /> */}
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

  return (
    <>
      <Swiper
        onSwiper={setSwiper}
        autoplay={autoplay}
        speed={speed}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={true}
        pagination={pagination}
        modules={[Autoplay, Navigation, Pagination]}
        style={{
          height: '100%'
        }}
      >
        {products && listProducts}
        {slides && listSlides}
        {reviews && listReviews}
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

      {products ||
        (reviews && (
          <>
            <SwiperPrev
              onClick={() => swiper.slidePrev()}
              swipertype="section"
              component="img"
              alt="prev"
              src="/images/swiper/prev.png"
            />
            <SwiperNext
              onClick={() => swiper.slideNext()}
              swipertype="section"
              component="img"
              alt="next"
              src="/images/swiper/next.png"
            />
          </>
        ))}
    </>
  );
};

export default Slider;
