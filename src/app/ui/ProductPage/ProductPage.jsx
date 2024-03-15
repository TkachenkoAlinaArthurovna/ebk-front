'use client';
import { useEffect, useState } from 'react';
import TabsProductPage from '@/app/ui/ProductPage/TabsProductPage';
import SlidersProductPage from '@/app/ui/ProductPage/SlidersProductPage';
import Content from '@/app/ui/Content';
import BreadCrumbsDynamic from '@/app/ui/BreadCrumbsDynamic';
import ProductsList from '@/app/ui/CategoryPage/CategoryItems/ProductsList';
import { StyledSection } from '@/app/ui/ProductPage/ProductPageStyles';
import { Box } from '@mui/material';
import PageTitle from '@/app/ui/PageTitle';
import ViewedList from '@/app/ui/ProductPage/ViewedList';
import { useResize } from '@/app/lib/helpers';
import NotFound from '@/app/not-found';

const ProductPage = ({ currentProduct, partsOfCategory }) => {
  const [filteredArr, setFilteredArray] = useState([]);
  const [width, height] = useResize();

  useEffect(() => {
    const sessionArr = currentProduct
      ? JSON.parse(sessionStorage.getItem('currentProduct'))
      : null;
    if (!sessionArr || sessionArr.length === 0) {
      return;
    } else {
      const filterArr = sessionArr.filter(
        (obj) => obj._id !== currentProduct._id,
      );
      setFilteredArray(filterArr);
    }
  }, []);
  return (
    <>
      {!currentProduct && <NotFound />}
      {currentProduct && (
        <>
          <Content>
            <BreadCrumbsDynamic
              currentProduct={currentProduct}
              partsOfCategory={partsOfCategory}
            />
          </Content>
          <TabsProductPage currentProduct={currentProduct} />

          {width >= 1024 &&
            filteredArr.length <= 4 &&
            filteredArr.length > 0 && (
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
                      <ViewedList products={filteredArr} />
                    </Box>
                  </Box>
                </Content>
              </StyledSection>
            )}

          {width < 1024 &&
            width >= 685 &&
            filteredArr.length <= 3 &&
            filteredArr.length > 0 && (
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
                      <ViewedList products={filteredArr} />
                    </Box>
                  </Box>
                </Content>
              </StyledSection>
            )}

          {width < 685 && filteredArr.length <= 2 && filteredArr.length > 0 && (
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
                    <ViewedList products={filteredArr} />
                  </Box>
                </Box>
              </Content>
            </StyledSection>
          )}

          {width >= 1024 && filteredArr.length > 4 && (
            <SlidersProductPage filteredArr={filteredArr} />
          )}
          {width < 1024 && width >= 685 && filteredArr.length > 3 && (
            <SlidersProductPage filteredArr={filteredArr} />
          )}
          {width < 685 && filteredArr.length > 2 && (
            <SlidersProductPage filteredArr={filteredArr} />
          )}
        </>
      )}
    </>
  );
};

export default ProductPage;
