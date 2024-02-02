'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  SubCategoryLink,
  StyledTabs,
  StyledTab,
  StyledBox,
} from '@/app/ui/Header/HeaderStyles';
import { Box } from '@mui/material';
import CustomTabPanel from '@/app/ui/Tabs/CustomTabPanel';
import { a11yProps } from '@/app/lib/helpers';
import { capitalizeFirstLetter } from '@/app/lib/helpers';

const MenuTouchpad = ({ handleCloseCatalog, categories }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <StyledBox>
      <StyledTabs
        orientation="vertical"
        variant="scrollable"
        scrollButtons={false}
        value={value}
        onChange={handleChange}
      >
        {categories.map((category, index) => {
          if (category.children.length > 0) {
            return (
              <StyledTab
                key={category.id}
                label={
                  <Box sx={{ textAlign: 'start' }}>
                    {capitalizeFirstLetter(category.name)}
                  </Box>
                }
                {...a11yProps(index)}
              ></StyledTab>
            );
          } else {
            return (
              <StyledTab
                key={category.id}
                component={Link}
                href={`/${category.link}`}
                onClick={handleCloseCatalog}
                label={
                  <Box sx={{ textAlign: 'start' }}>
                    {capitalizeFirstLetter(category.name)}
                  </Box>
                }
                {...a11yProps(index)}
              ></StyledTab>
            );
          }
        })}
      </StyledTabs>
      {categories.map((category, index) => (
        <CustomTabPanel key={category.id} value={value} index={index}>
          {category.children.map((item) => (
            <SubCategoryLink key={item.id}>
              <Link href={`/${item.link}`} onClick={handleCloseCatalog}>
                {capitalizeFirstLetter(item.name)}
              </Link>
            </SubCategoryLink>
          ))}
        </CustomTabPanel>
      ))}
    </StyledBox>
  );
};

export default MenuTouchpad;
