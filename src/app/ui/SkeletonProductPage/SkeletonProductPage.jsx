'use client';
import * as React from 'react';
import { StyledTabs, StyledTab } from '@/app/ui/Tabs/TabsStyled';
import CustomTabPanel from '@/app/ui/Tabs/CustomTabPanel';
import { Box, Typography, Skeleton } from '@mui/material';
import { a11yProps } from '@/app/lib/helpers';
import Content from '@/app/ui/Content';
import {
  StyledSection,
  StyledIconFavoriteButton,
} from '@/app/ui/ProductPage/ProductPageStyles';
import SkeletonBreadCrumbs from '@/app/ui/Skeletons/SkeletonBreadCrumbs';
import SkeletonPageTitle from '@/app/ui/Skeletons/SkeletonPageTitle';
import {
  WrapperAboutProduct,
  WrapperContent,
} from '@/app/ui/ProductPage/ProductPageStyles';
import { StyledDiv } from '@/app/ui/SkeletonProductPage/SkeletonProductPageStyled';
import ButtonMain from '@/app/ui/ButtonMain';
import ShoppingCartIcon from '@mui/icons-material';

const SkeletonProductPage = () => {
  return (
    <>
      <Content>
        <Skeleton variant="rounded" width={200} height={28} />
        <StyledSection as="section" sx={{ marginTop: '20px' }}>
          <Content>
            <Box
              sx={{
                marginBottom: '24px',
                borderBottom: 1,
                borderColor: 'divider',
              }}
            >
              <StyledTabs aria-label="basic tabs example">
                <StyledTab label="Про товар" />
                <StyledTab label="Характеристики" />
                <StyledTab label="Опис" />
              </StyledTabs>
            </Box>
            <WrapperAboutProduct>
              <Skeleton
                sx={{
                  width: '50%',
                  display: 'flex',
                  alignItems: 'flex-start',
                  '@media (max-width: 700px)': {
                    width: '100%',
                    marginBottom: '16px',
                  },
                }}
              >
                <Skeleton variant="rounded" width="100%" height="100%" />
              </Skeleton>
              <WrapperContent>
                <SkeletonPageTitle />
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
                  <Skeleton variant="rounded" fontSize={28} width={100} />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    marginBottom: '32px',
                  }}
                >
                  <Skeleton width={'100%'} />

                  <StyledIconFavoriteButton>
                    <Skeleton
                      variant="circular"
                      sx={{ width: '24px', height: '24px' }}
                    />
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
