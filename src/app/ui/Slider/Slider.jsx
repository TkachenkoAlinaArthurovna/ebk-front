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
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  let listProducts;
  let listSlides;

  if (slides) {
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
  if (products) {
    listProducts = productsArr.map((product) => (
      <SwiperSlide key={product.id}>
        <ProductCard />
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
        {products && listProducts}
        {slides && listSlides}
      </Swiper>
      {slides && (
        <>
          <SwiperPrev
            swipertype="main"
            ref={prevRef}
            component="img"
            alt="prev"
            src="/images/swiper/prev.png"
          />
          <SwiperNext
            swipertype="main"
            ref={nextRef}
            component="img"
            alt="next"
            src="/images/swiper/next.png"
          />
        </>
      )}

      {products && (
        <>
          <SwiperPrev
            swipertype="section"
            ref={prevRef}
            component="img"
            alt="prev"
            src="/images/swiper/prev.png"
          />
          <SwiperNext
            swipertype="section"
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
