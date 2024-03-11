'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Content from '@/app/ui/Content/Content';
import Slider from '@/app/ui/Slider';
import { StyledTabs, StyledTab, StyledSection } from '@/app/ui/Tabs/TabsStyled';
import CustomTabPanel from '@/app/ui/Tabs/CustomTabPanel';
import { a11yProps } from '@/app/lib/helpers';
import {
  newProducts,
  topProducts,
  exclusiveProducts,
} from '@/app/lib/tabsProducts';

const Tabs = () => {
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
            <StyledTab label="Новинки" {...a11yProps(0)} />
            <StyledTab label="Хіти продажів" {...a11yProps(1)} />
            <StyledTab label="Ексклюзив" {...a11yProps(2)} />
          </StyledTabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Slider
            autoplay={false}
            spaceBetween="16px"
            slidesPerView="4"
            pagination={false}
            products={newProducts}
            heart={false}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Slider
            autoplay={false}
            spaceBetween="16px"
            slidesPerView="4"
            pagination={false}
            products={topProducts}
            heart={false}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Slider
            autoplay={false}
            spaceBetween="16px"
            slidesPerView="4"
            pagination={false}
            products={exclusiveProducts}
            heart={false}
          />
        </CustomTabPanel>
      </Content>
    </StyledSection>
  );
};

export default Tabs;
