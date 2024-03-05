'use client';
import PageTitle from '@/app/ui/PageTitle';
import { StyledSection } from '@/app/ui/ProductPage/ProductPageStyles';
import { Box, Typography } from '@mui/material';
import Slider from '@/app/ui/Slider';
import Content from '@/app/ui/Content';

const SlidersProductPage = ({ filteredArr }) => {
  return (
    <StyledSection as="section">
      <Content>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ marginBottom: '24px' }}>
            <PageTitle>Ви нещодавно переглядали</PageTitle>
          </Box>
          <Box>
            <Slider
              autoplay={false}
              spaceBetween="16px"
              slidesPerView="4"
              pagination={false}
              products={filteredArr}
            />
          </Box>
        </Box>
      </Content>
    </StyledSection>
  );
};

export default SlidersProductPage;
