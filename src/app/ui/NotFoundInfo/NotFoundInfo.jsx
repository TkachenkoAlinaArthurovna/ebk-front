import React from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';
import Content from '@/app/ui/Content';
import PageTitle from '@/app/ui/PageTitle';
import {
  StyledText,
  StyledButton,
  StyledTextContainer,
  StyledPageWrapper,
  StyledImageContainer,
} from '@/app/ui/NotFoundInfo/NotFoundInfoStyles';

const NotFoundInfo = () => {
  return (
    <Content>
      <StyledPageWrapper>
        <PageTitle>Помилка 404</PageTitle>
        <StyledTextContainer>
          <StyledText variant="h6">
            "Ця сторінка зникла, але нічого страшного.
          </StyledText>
          <StyledText variant="h6">
            Поверніться на головну і продовжимо пригоду разом!"
          </StyledText>
        </StyledTextContainer>
        <Link href="/">
          <StyledButton variant="contained">
            Повернутися на головну сторінку
          </StyledButton>
        </Link>
        <StyledImageContainer>
          <Box
            component="img"
            alt="Page not found image"
            src="/images/page-404.jpg"
          />
        </StyledImageContainer>
      </StyledPageWrapper>
    </Content>
  );
};

export default NotFoundInfo;
