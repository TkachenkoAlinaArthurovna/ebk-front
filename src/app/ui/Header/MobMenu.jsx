'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  SubCategoryLink,
  StyledTabs,
  StyledTab,
  StyledBox,
} from '@/app/ui/Header/HeaderStyles';
import CustomTabPanel from '@/app/ui/Tabs/CustomTabPanel';
import { a11yProps } from '@/app/lib/helpers';
import { catalog } from '@/app/lib/mockData';

const updatedCatalog = catalog.map((item) => ({
  ...item,
  children: catalog.filter((subItem) => subItem.parentId === item.id),
}));
const categories = updatedCatalog.filter((item) => !item.parentId);

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

const MobMenu = ({ handleCloseCatalog }) => {
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
                label={capitalizeFirstLetter(category.name)}
                {...a11yProps(index)}
              ></StyledTab>
            );
          } else {
            return (
              <StyledTab
                key={category.id}
                component={Link}
                href="/cart"
                onClick={handleCloseCatalog}
                label={capitalizeFirstLetter(category.name)}
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
              <Link href="/" onClick={handleCloseCatalog}>
                {capitalizeFirstLetter(item.name)}
              </Link>
            </SubCategoryLink>
          ))}
        </CustomTabPanel>
      ))}
    </StyledBox>
  );
};

export default MobMenu;
