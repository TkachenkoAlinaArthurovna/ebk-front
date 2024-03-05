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

const ProductPage = ({ currentProduct, partsOfCategory }) => {
  const [filteredArr, setFilteredArray] = useState([]);

  useEffect(() => {
    const sessionArr = JSON.parse(sessionStorage.getItem('currentProduct'));
    if (!sessionArr || sessionArr.length === 0) {
      return;
    } else {
      const filterArr = sessionArr.filter(
        (obj) => obj._id !== currentProduct._id,
      );
      setFilteredArray(filterArr);
    }
  }, []);
  // console.log(filteredArr)
  return (
    <>
      <Content>
        <BreadCrumbsDynamic
          currentProduct={currentProduct}
          partsOfCategory={partsOfCategory}
        />
      </Content>
      <TabsProductPage currentProduct={currentProduct} />

      {filteredArr.length > 0 && filteredArr.length <= 4 && (
        <StyledSection as="section">
          <Content>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box sx={{ marginBottom: '24px' }}>
                <PageTitle>Переглянуті товари</PageTitle>
              </Box>
              <Box>
                <ViewedList products={filteredArr} />
              </Box>
            </Box>
          </Content>
        </StyledSection>
      )}

      {filteredArr.length > 4 && (
        <SlidersProductPage filteredArr={filteredArr} />
      )}
    </>
  );
};

export default ProductPage;
