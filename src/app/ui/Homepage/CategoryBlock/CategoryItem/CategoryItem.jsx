import React from 'react';
import Image from 'next/image';

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
              <Image
                alt={name}
                src={img}
                fill
                sizes="100%"
                style={{
                  objectFit: 'contain',
                }}
              />
            </StyledImageWrapper>
            <StyledName variant="subtitle1">{name}</StyledName>
          </StyledContainer>
        </StyledWrapper>
      </ShadowBox>
    </StyledLink>
  );
};

export default CategoryItem;
