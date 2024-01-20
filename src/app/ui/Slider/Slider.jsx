import { useRef } from 'react';
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

const Slider = ({
  autoplay,
  speed = false,
  spaceBetween,
  slidesPerView,
  pagination,
  products = [],
  slides = [],
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  let listProducts;
  let listSlides;

  if (products.length > 0) {
    listProducts = products.map((product) => (
      <SwiperSlide key={product.id}>
        <ProductCard />
      </SwiperSlide>
    ));
  }

  if (slides.length > 0) {
    listSlides = slides.map((slide) => (
      <SwiperSlide key={slide.index}>
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

  return (
    <>
      <Swiper
        autoplay={autoplay}
        speed={speed}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={true}
        pagination={pagination}
        modules={[Autoplay, Navigation, Pagination]}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {products.length > 0 && listProducts}
        {slides.length > 0 && listSlides}
      </Swiper>

      {products.length > 0 && (
        <>
          <SwiperPrev
            ref={prevRef}
            component="img"
            alt="prev"
            src="/images/swiper/prev.png"
          />
          <SwiperNext
            ref={nextRef}
            component="img"
            alt="next"
            src="/images/swiper/next.png"
          />
        </>
      )}
      {slides.length > 0 && (
        <>
          <MainSwiperPrev
            ref={prevRef}
            component="img"
            alt="prev"
            src="/images/swiper/prev.png"
          />
          <MainSwiperNext
            ref={nextRef}
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
