import React from 'react';
import Content from '@/app/ui/Content';
import Slider from '@/app/ui/Slider';
import PageTitle from '@/app/ui/PageTitle';
import {
  StyledMainContainer,
  StyledContainer,
} from '@/app/ui/Homepage/ReviewsBlock/ReviewsBlockStyles';

const ReviewsBlock = () => {
  return (
    <StyledMainContainer as="section">
      <Content>
        <PageTitle>Відгуки</PageTitle>
        <StyledContainer>
          <Slider spaceBetween="0" slidesPerView="3" reviews={true} />
        </StyledContainer>
      </Content>
    </StyledMainContainer>
  );
};

export default ReviewsBlock;
