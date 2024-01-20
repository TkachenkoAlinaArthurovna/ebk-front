import { Stack } from '@mui/material';
import React from 'react';
import ShadowBox from '@/app/ui/ShadowBox/ShadowBox';
import {
  StyledLink,
  StyledBox,
  StyledImage,
  StyledName,
} from '@/app/ui/Homepage/CategoryBlock/CategoryItem/CategoryItemStyles';

const CategoryItem = ({ name, img, url }) => {
  return (
    <StyledLink href={url} passHref>
      <ShadowBox>
        <StyledBox>
          <Stack>
            <StyledImage component="img" alt={name} src={img} />
            <StyledName variant="subtitle1">{name}</StyledName>
          </Stack>
        </StyledBox>
      </ShadowBox>
    </StyledLink>
  );
};

export default CategoryItem;
