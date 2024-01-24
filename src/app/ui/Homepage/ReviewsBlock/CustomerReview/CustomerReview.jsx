import React from 'react';
import ShadowBox from '@/app/ui/ShadowBox';
import { Box, Stack } from '@mui/system';
import { createInitials } from '@/app/lib/helpers';
import {
  StyledName,
  StyledDate,
  StyledText,
  StyledCustomerInitials,
  StyledMainContainer,
} from '@/app/ui/Homepage/ReviewsBlock/CustomerReview/CustomerReviewStyles';

const CustomerReview = ({ date, firstName, lastName, text }) => {
  const customerInitials = createInitials(firstName, lastName);

  return (
    <StyledMainContainer>
      <ShadowBox>
        <Stack direction="column" sx={{ width: '100%' }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: '100%', marginBottom: '16px' }}
          >
            <Stack direction="row" alignItems="center">
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '60px',
                  height: '60px',
                  bgcolor: '#F3F3F3',
                  borderRadius: '50%',
                  textAlign: 'center',
                }}
              >
                <StyledCustomerInitials>
                  {customerInitials}
                </StyledCustomerInitials>
              </Box>
              <StyledName variant="subtitle1">
                {firstName} {lastName}
              </StyledName>
            </Stack>
            <Box>
              <StyledDate variant="subtitle2">{date}</StyledDate>
            </Box>
          </Stack>
          <StyledText variant="body1">{text}543543</StyledText>
        </Stack>
      </ShadowBox>
    </StyledMainContainer>
  );
};

export default CustomerReview;
