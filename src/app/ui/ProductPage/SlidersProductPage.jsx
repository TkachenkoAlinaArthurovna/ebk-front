import PageTitle from '@/app/ui/PageTitle';
import { StyledSection } from '@/app/ui/ProductPage/ProductPageStyles';
import { Box } from '@mui/material';
import Slider from '@/app/ui/Slider';
import Content from '@/app/ui/Content';

const SlidersProductPage = () => {
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
            <PageTitle>Схожі товари</PageTitle>
          </Box>
          <Box>
            <Slider
              autoplay={false}
              spaceBetween="16px"
              slidesPerView="4"
              pagination={false}
              products={true}
            />
          </Box>
        </Box>
      </Content>
    </StyledSection>
  );
};

export default SlidersProductPage;
