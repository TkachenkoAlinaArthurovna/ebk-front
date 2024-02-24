'use client';
import Slider from '@/app/ui/Slider';
import Content from '@/app/ui/Content/Content';
import { StyledSection } from '@/app/ui/Homepage/MainSlider/MainSliderStyled';

const MainSlider = () => {
  const slides = [
    '/images/bike_banner_1.jpg',
    '/images/bike_banner_2.jpg',
    '/images/bike_banner_3.jpg',
  ];
  return (
    <StyledSection as="section">
      <Content>
        <Slider
          autoplay={{
            delay: 5000,
          }}
          speed={1000}
          spaceBetween={0}
          slidesPerView={1}
          pagination={true}
          slides={slides}
        />
      </Content>
    </StyledSection>
  );
};

export default MainSlider;
