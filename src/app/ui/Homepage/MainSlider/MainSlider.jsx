'use client';
import Slider from '@/app/ui/Slider';
import Content from '@/app/ui/Content';
import { StyledSection } from '@/app/ui/Homepage/MainSlider/MainSliderStyled';

const MainSlider = () => {
  const slides = [
    '/images/main-slider.png',
    '/images/main-slider.png',
    '/images/main-slider.png',
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
