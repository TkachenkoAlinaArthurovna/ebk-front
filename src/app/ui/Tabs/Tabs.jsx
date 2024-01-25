'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Content from '@/app/ui/Content/Content';
import Slider from '@/app/ui/Slider';
import { StyledTabs, StyledTab, StyledSection } from '@/app/ui/Tabs/TabsStyled';
import CustomTabPanel from '@/app/ui/Tabs/CustomTabPanel';
import { a11yProps } from '@/app/lib/helpers';

const Tabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <StyledSection as="section">
      <Content>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <StyledTab
              sx={{ textTransform: 'capitalize' }}
              label="Новинки"
              {...a11yProps(0)}
            />
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
            products={true}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Slider
            autoplay={false}
            spaceBetween="16px"
            slidesPerView="4"
            pagination={false}
            products={true}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Slider
            autoplay={false}
            spaceBetween="16px"
            slidesPerView="4"
            pagination={false}
            products={true}
          />
        </CustomTabPanel>
      </Content>
    </StyledSection>
  );
};

export default Tabs;
