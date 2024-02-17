'use client';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { serCurrentProduct } from '@/redux/slices/CurrentProductPageSlice';
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(serCurrentProduct(currentProduct));
  }, [currentProduct]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <StyledSection as="section">
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
            <StyledTab label="Характеристики" {...a11yProps(1)} />
            <StyledTab label="Опис" {...a11yProps(2)} />
          </StyledTabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <AboutProduct />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <СharacteristicsProduct />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <DescriptionProduct />
        </CustomTabPanel>
      </Content>
    </StyledSection>
  );
};
export default TabsProductPage;
