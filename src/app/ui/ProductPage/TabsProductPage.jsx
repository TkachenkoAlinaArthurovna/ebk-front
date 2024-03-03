'use client';
import * as React from 'react';
import { StyledTabs, StyledTab } from '@/app/ui/Tabs/TabsStyled';
import CustomTabPanel from '@/app/ui/Tabs/CustomTabPanel';
import { Box } from '@mui/material';
import { a11yProps } from '@/app/lib/helpers';
import Content from '@/app/ui/Content';
import AboutProduct from '@/app/ui/ProductPage/AboutProduct';
import СharacteristicsProduct from '@/app/ui/ProductPage/СharacteristicsProduct';
import DescriptionProduct from '@/app/ui/ProductPage/DescriptionProduct';
import { StyledSection } from '@/app/ui/ProductPage/ProductPageStyles';
import { current } from '@reduxjs/toolkit';

const TabsProductPage = ({ currentProduct }) => {
  React.useEffect(() => {
    const session = JSON.parse(sessionStorage.getItem('currentProduct'));

    if (!session || session.length === 0) {
      sessionStorage.setItem(
        'currentProduct',
        JSON.stringify([currentProduct]),
      );
    } else {
      const findObj = session.find(
        (obj) => JSON.stringify(obj) === JSON.stringify(currentProduct),
      );
      if (!findObj) {
        sessionStorage.setItem(
          'currentProduct',
          JSON.stringify([...session, currentProduct]),
        );
      }
    }
  }, [currentProduct]);

  const [value, setValue] = React.useState(0);
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
            {currentProduct.params.length > 0 && (
              <StyledTab label="Характеристики" {...a11yProps(1)} />
            )}
            {currentProduct.params.length > 0 && (
              <StyledTab label="Опис" {...a11yProps(2)} />
            )}
            {currentProduct.params.length == 0 && (
              <StyledTab label="Опис" {...a11yProps(1)} />
            )}
          </StyledTabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <AboutProduct currentProduct={currentProduct} />
        </CustomTabPanel>
        {currentProduct.params.length > 0 && (
          <CustomTabPanel value={value} index={1}>
            <СharacteristicsProduct currentProduct={currentProduct} />
          </CustomTabPanel>
        )}
        {currentProduct.params.length > 0 && (
          <CustomTabPanel value={value} index={2}>
            <DescriptionProduct currentProduct={currentProduct} />
          </CustomTabPanel>
        )}
        {currentProduct.params.length == 0 && (
          <CustomTabPanel value={value} index={1}>
            <DescriptionProduct currentProduct={currentProduct} />
          </CustomTabPanel>
        )}
      </Content>
    </StyledSection>
  );
};
export default TabsProductPage;
