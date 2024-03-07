'use client';
import Content from '@/app/ui/Content';
import { StyledSection } from '@/app/ui/ProductPage/ProductPageStyles';
import { Box, Skeleton } from '@mui/material';
import { WrapperAboutProduct } from '@/app/ui/ProductPage/ProductPageStyles';

const SkeletonProductPage = () => {
  return (
    <>
      <Content>
        <Skeleton variant="rounded" width={'60%'} height={24} />
        <StyledSection as="section" sx={{ marginTop: '20px' }}>
          <Content>
            <Box
              sx={{
                display: 'flex',
                borderBottom: 1,
                borderColor: 'divider',
              }}
            >
              <Skeleton variant="rounded" width={200} height={48} />
              <Skeleton variant="rounded" width={200} height={48} />
              <Skeleton variant="rounded" width={200} height={48} />
            </Box>
            <WrapperAboutProduct>
              <Skeleton
                variant="rounded"
                sx={{
                  width: '100%',
                  height: '500px',
                  margin: '20px 0',
                }}
              ></Skeleton>
            </WrapperAboutProduct>
          </Content>
        </StyledSection>
      </Content>
    </>
  );
};
export default SkeletonProductPage;
