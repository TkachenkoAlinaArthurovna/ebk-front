'use client';

import React from 'react';
import { Box } from '@mui/material';
import Slider from '@/app/ui/Slider';
import Content from '@/app/ui/Content';
import PageTitle from '@/app/ui/PageTitle';
import { StyledMainContainer } from '@/app/ui/Homepage/ReviewsBlock/ReviewsBlockStyles';

const ReviewsBlock = () => {
  return (
    <StyledMainContainer as="section">
      <Content>
        <PageTitle>Відгуки</PageTitle>
        <Box>
          <Slider reviews={true} />
        </Box>
      </Content>
    </StyledMainContainer>
  );
};

export default ReviewsBlock;
