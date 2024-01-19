import { Stack } from '@mui/material';
import React from 'react';
import ShadowBox from '@/app/ui/ShadowBox';
import {
  StyledLink,
  StyledBox,
  StyledImage,
  StyledName
} from '@/app/ui/home-page/category-block/CategoryItem/CategoryItemStyles';

const CategoryItem = ({ name, img, url }) => {
  return (
    <StyledLink href={url} passHref>
        <ShadowBox>
          <StyledBox>
            <Stack>
              <StyledImage component="img" alt={name} src={img} />
              <StyledName variant="subtitle1" gutterBottom>
                {name}
              </StyledName>
            </Stack>
          </StyledBox>
        </ShadowBox>
    </StyledLink>
  );
};

export default CategoryItem;
