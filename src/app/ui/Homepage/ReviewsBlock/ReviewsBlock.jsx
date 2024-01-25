'use client';

import React from 'react';
import { useWindowSize } from 'react-use';
import { Box } from '@mui/material';
import { getSlidesPerView } from '@/app/lib/helpers';
import Slider from '@/app/ui/Slider';
import Content from '@/app/ui/Content';
import PageTitle from '@/app/ui/PageTitle';
import {
  StyledMainContainer,
  StyledContainer,
} from '@/app/ui/Homepage/ReviewsBlock/ReviewsBlockStyles';

const ReviewsBlock = () => {
  const { width: windowWidth } = useWindowSize();
  const numberOfSlides = getSlidesPerView(windowWidth);

  return (
    <StyledMainContainer as="section">
      <Content>
        <PageTitle>Відгуки</PageTitle>
        <Box>
          <Slider
            spaceBetween="0"
            slidesPerView={numberOfSlides}
            reviews={true}
          />
        </Box>
      </Content>
    </StyledMainContainer>
  );
};

export default ReviewsBlock;
