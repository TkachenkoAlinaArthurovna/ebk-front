'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from '@/app/ui/Slider';
import { StyledTabs, StyledTab } from '@/app/ui/Tabs/TabsStyled';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BasicTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
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
          products={[
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
          ]}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Slider
          autoplay={false}
          spaceBetween="16px"
          slidesPerView="4"
          pagination={false}
          products={[
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
          ]}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Slider
          autoplay={false}
          spaceBetween="16px"
          slidesPerView="4"
          pagination={false}
          products={[
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
          ]}
        />
      </CustomTabPanel>
    </Box>
  );
};

export default BasicTabs;
