import React from 'react';
import ShadowBox from '@/app/ui/ShadowBox';
import { createInitials } from '@/app/lib/helpers';
import { Stack } from '@mui/system';
import {
  StyledName,
  StyledDate,
  StyledText,
  StyledCustomerInitials,
  StyledMainContainer,
  StyledWrapper,
  StyledDateWrapper,
  StyledComponentWrapper,
  StyledNameAndInitialsContainer,
} from '@/app/ui/Homepage/ReviewsBlock/CustomerReview/CustomerReviewStyles';

const CustomerReview = ({ date, firstName, lastName, text }) => {
  const customerInitials = createInitials(firstName, lastName);

  return (
    <StyledMainContainer>
      <ShadowBox $padding="8%">
        <StyledComponentWrapper>
          <StyledNameAndInitialsContainer>
            <Stack direction="row" alignItems="center" flexShrink="0">
              <StyledWrapper>
                <StyledCustomerInitials>
                  {customerInitials}
                </StyledCustomerInitials>
              </StyledWrapper>
              <StyledName variant="subtitle1">
                {firstName} {lastName}
              </StyledName>
            </Stack>
            <StyledDateWrapper>
              <StyledDate variant="subtitle2">{date}</StyledDate>
            </StyledDateWrapper>
          </StyledNameAndInitialsContainer>
          <StyledText variant="body1">{text}</StyledText>
        </StyledComponentWrapper>
      </ShadowBox>
    </StyledMainContainer>
  );
};

export default CustomerReview;
