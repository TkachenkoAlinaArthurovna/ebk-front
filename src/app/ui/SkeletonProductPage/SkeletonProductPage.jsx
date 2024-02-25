'use client';
import * as React from 'react';
import Content from '@/app/ui/Content';
import { StyledSection } from '@/app/ui/ProductPage/ProductPageStyles';
import SkeletonPageTitle from '@/app/ui/Skeletons/SkeletonPageTitle';
import { Box, Typography, Skeleton } from '@mui/material';
import {
  WrapperAboutProduct,
  WrapperSlider,
  WrapperContent,
  StyledIconFavoriteButton,
} from '@/app/ui/ProductPage/ProductPageStyles';

import ButtonMain from '@/app/ui/ButtonMain';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const SkeletonProductPage = () => {
  return (
    <>
      <Content>
      <Skeleton variant='rounded' width={'60%'} height={24} />
        <StyledSection as="section" sx={{ marginTop: '20px' }}>
          <Content>
            <Box
              sx={{
                display: 'flex',
                // marginBottom: '24px',
                borderBottom: 1,
                borderColor: 'divider',
              }}
            >
              <Skeleton variant="rounded" width={200} height={48} />
              <Skeleton variant="rounded" width={200} height={48} />
              <Skeleton variant="rounded" width={200} height={48} />
            </Box>
            <WrapperAboutProduct>
              <Box
                sx={{
                  width: '50%',
                  display: 'flex',
                  // alignItems: 'flex-start',
                  '@media (max-width: 700px)': {
                    width: '100%',
                    marginBottom: '16px',
                  },
                }}
              >
                <WrapperSlider>
                  <Skeleton
                    sx={{
                      width: '100%',
                      height: '200px',
                    }}
                  />
                </WrapperSlider>
              </Box>
              <WrapperContent>
              <Skeleton variant="rounded" width={200} height={48} sx={{marginTop: '10px'}}/>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'end',
                    marginTop: '16px',
                  }}
                >
                  <Typography sx={{ color: '#6a6a6a' }}>id</Typography>
                </Box>
                <Box sx={{ marginBottom: '32px' }}>
                <Skeleton variant="rounded" width={100} height={28} />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    marginBottom: '32px',
                  }}
                >
                  <ButtonMain width={'100%'} startIcon={<ShoppingCartIcon />}>
                    Купити
                  </ButtonMain>
                  <StyledIconFavoriteButton>
                    <FavoriteIcon sx={{ width: '24px', height: '24px' }} />
                  </StyledIconFavoriteButton>
                </Box>
              </WrapperContent>
            </WrapperAboutProduct>
          </Content>
        </StyledSection>
      </Content>
    </>
  );
};
export default SkeletonProductPage;
