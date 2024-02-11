'use client';
import { useState } from 'react';
import CustomerReview from '@/app/ui/Homepage/ReviewsBlock/CustomerReview';
import { Typography } from '@mui/material';
import {
  StyledBoxReviewContainer,
  StyledBox,
  StyledBoxReviews,
  StyledButtonFirstReview,
  StyledButtonReviews,
  StyledTypographyReview,
} from '@/app/ui/ReviewsPage/ReviewsPageStyles';
import ReviewsModalBtn from '@/app/ui/ReviewsPage/ReviewsModalBtn';
import PageTitle from '@/app/ui/PageTitle';

const reviews = [
  {
    date: '10.10.2012',
    firstName: 'vova',
    lastName: 'vovkin',
    text: 'Одні з найкращих велосипедів на планеті, дуже вам вдячний! ',
  },
  {
    date: '10.10.2012',
    firstName: 'vova',
    lastName: 'vovkin',
    text: 'Одні з найкращих велосипедів на планеті ',
  },
  {
    date: '10.10.2012',
    firstName: 'vova',
    lastName: 'vovkin',
    text: 'Одні з найкращих велосипедів на планеті, дуже вам вдячний, комнанія Агонь!!!! ',
  },
  {
    date: '10.10.2012',
    firstName: 'vova',
    lastName: 'vovkin',
    text: 'Одні з найкращих велосипедів на планеті, дуже вам вдячний, комнанія Агонь!!!! ',
  },
  { date: '10.10.2012', firstName: 'vova', lastName: 'vovkin', text: 'text' },
  { date: '10.10.2012', firstName: 'vova', lastName: 'vovkin', text: 'text' },
];

const ReviewsPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <StyledBoxReviewContainer>
      <StyledBox>
        <PageTitle>Відгуки</PageTitle>{' '}
        <ReviewsModalBtn
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
        />
        <StyledButtonReviews onClick={handleOpen} variant="outlened">
          Написати відгук
        </StyledButtonReviews>
      </StyledBox>

      {!reviews ? (
        <StyledBoxReviews>
          <Typography mb="16px">Немає жодного відгуку</Typography>
          <StyledButtonFirstReview variant="contained">
            Написати перший відгук
          </StyledButtonFirstReview>
        </StyledBoxReviews>
      ) : (
        reviews.map((review, i) => (
          <CustomerReview
            key={i}
            date={review.date}
            firstName={review.firstName}
            lastName={review.lastName}
            text={review.text}
          />
        ))
      )}
    </StyledBoxReviewContainer>
  );
};
export default ReviewsPage;
