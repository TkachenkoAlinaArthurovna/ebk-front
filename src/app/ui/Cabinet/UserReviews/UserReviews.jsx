'use client';

import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PageTitle from '@/app/ui/PageTitle';
import CustomerReview from '@/app/ui/Homepage/ReviewsBlock/CustomerReview';
import { reviewsBlockData as reviewsData } from '@/app/lib/mockData';
import {
  Wrapper,
  ShowMoreBox,
  StyledButton,
} from '@/app/ui/Cabinet/UserReviews/UserReviewsStyles';

const UserReviews = () => {
  const listReviews = reviewsData.map(
    ({ id, date, firstName, lastName, text }) => (
      <CustomerReview
        key={id}
        date={date}
        firstName={firstName}
        lastName={lastName}
        text={text}
        menu
      />
    ),
  );

  return (
    <Wrapper>
      <PageTitle>Відгуки</PageTitle>
      {listReviews}
      <ShowMoreBox>
        <StyledButton
          endIcon={<ArrowDownwardIcon />}
          onClick={() => console.log('Load more')}
        >
          Показати ще
        </StyledButton>
      </ShowMoreBox>
    </Wrapper>
  );
};

export default UserReviews;
