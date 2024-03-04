'use client';
import Slider from '@/app/ui/Slider';
import Content from '@/app/ui/Content/Content';
import { StyledSection } from '@/app/ui/Homepage/MainSlider/MainSliderStyled';
import { slides } from '@/app/lib/slides';

const MainSlider = () => {
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
