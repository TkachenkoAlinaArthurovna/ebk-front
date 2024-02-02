'use client';
import * as React from 'react';
import { StyledTabs, StyledTab } from '@/app/ui/Tabs/TabsStyled';
import CustomTabPanel from '@/app/ui/Tabs/CustomTabPanel';
import { Box } from '@mui/material';
import { a11yProps } from '@/app/lib/helpers';
import AboutProduct from '@/app/ui/ProductPage/AboutProduct';
import СharacteristicsProduct from '@/app/ui/ProductPage/СharacteristicsProduct';
import DescriptionPage from '@/app/ui/ProductPage/DescriptionPage';

const TabsProductPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
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
        <DescriptionPage />
      </CustomTabPanel>
    </>
  );
};
export default TabsProductPage;
