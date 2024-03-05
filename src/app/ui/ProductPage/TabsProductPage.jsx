'use client';
import * as React from 'react';
import { useState } from 'react';
import { StyledTabs, StyledTab } from '@/app/ui/Tabs/TabsStyled';
import CustomTabPanel from '@/app/ui/Tabs/CustomTabPanel';
import { Box } from '@mui/material';
import { a11yProps } from '@/app/lib/helpers';
import Content from '@/app/ui/Content';
import AboutProduct from '@/app/ui/ProductPage/AboutProduct';
import СharacteristicsProduct from '@/app/ui/ProductPage/СharacteristicsProduct';
import DescriptionProduct from '@/app/ui/ProductPage/DescriptionProduct';
import { StyledSection } from '@/app/ui/ProductPage/ProductPageStyles';

const TabsProductPage = ({ currentProduct }) => {
  const { varieties } = currentProduct;
  const arrProducts = [currentProduct, ...varieties];
  const [mainProduct, setMainProduct] = useState(arrProducts[0]);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <StyledSection as="section" sx={{ marginTop: '20px' }}>
      <Content>
        <Box
          sx={{ marginBottom: '24px', borderBottom: 1, borderColor: 'divider' }}
        >
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <StyledTab label="Про товар" {...a11yProps(0)} />
            {currentProduct.params && currentProduct.params.length > 0 && (
              <StyledTab label="Характеристики" {...a11yProps(1)} />
            )}
            {currentProduct.params && currentProduct.params.length > 0 && (
              <StyledTab label="Опис" {...a11yProps(2)} />
            )}
            {currentProduct.params && currentProduct.params.length == 0 && (
              <StyledTab label="Опис" {...a11yProps(1)} />
            )}
          </StyledTabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <AboutProduct
            arrProducts={arrProducts}
            mainProduct={mainProduct}
            setMainProduct={setMainProduct}
          />
        </CustomTabPanel>
        {mainProduct.params && mainProduct.params.length > 0 && (
          <CustomTabPanel value={value} index={1}>
            <СharacteristicsProduct mainProduct={mainProduct} />
          </CustomTabPanel>
        )}
        {mainProduct.params && mainProduct.params.length > 0 && (
          <CustomTabPanel value={value} index={2}>
            <DescriptionProduct mainProduct={mainProduct} />
          </CustomTabPanel>
        )}
        {mainProduct.params && mainProduct.params.length == 0 && (
          <CustomTabPanel value={value} index={1}>
            <DescriptionProduct mainProduct={mainProduct} />
          </CustomTabPanel>
        )}
      </Content>
    </StyledSection>
  );
};
export default TabsProductPage;
