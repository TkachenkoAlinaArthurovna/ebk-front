import React from 'react';
import ShadowBox from '@/app/ui/ShadowBox/ShadowBox';
import {
  StyledLink,
  StyledWrapper,
  StyledImage,
  StyledName,
  StyledContainer,
  StyledImageWrapper,
} from '@/app/ui/Homepage/CategoryBlock/CategoryItem/CategoryItemStyles';

const CategoryItem = ({ name, img, url }) => {
  return (
    <StyledLink href={url} passHref>
      <ShadowBox>
        <StyledWrapper>
          <StyledContainer>
            <StyledImageWrapper>
              <StyledImage component="img" alt={name} src={img} />
            </StyledImageWrapper>
            <StyledName variant="subtitle1">{name}</StyledName>
          </StyledContainer>
        </StyledWrapper>
      </ShadowBox>
    </StyledLink>
  );
};

export default CategoryItem;
