'use client';

import React from 'react';
import { Box, styled, Button } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import PageTitle from '@/app/ui/PageTitle';
import CustomerReview from '@/app/ui/Homepage/ReviewsBlock/CustomerReview';
import { reviewsBlockData as reviewsData } from '@/app/lib/mockData';

const Wrapper = styled(Box)`
  width: 100%;
  margin-bottom: 100px;
  padding: 0;
`;

const ShowMoreBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  text-transform: none;
  color: #ffff;
  &:hover {
    background-color: #42ada7;
  }
`;

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
