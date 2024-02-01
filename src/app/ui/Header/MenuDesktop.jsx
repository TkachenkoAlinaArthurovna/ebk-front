import { ListItemText, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  StyledIconButton,
  StyledItem,
  StyledButton,
  SubCategoriesWrapper,
  SubCategoriesList,
} from '@/app/ui/Header/HeaderStyles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { capitalizeFirstLetter } from '@/app/lib/helpers';

const MenuDesktop = ({ handleCloseCatalog, categories }) => {
  const [showSubcategories, setShowSubcategories] = useState(null);

  const handleMouseEnter = (categoryId) => {
    setShowSubcategories(categoryId);
  };

  const handleMouseLeave = () => {
    setShowSubcategories(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '0',
      }}
    >
      {categories.map((category) => (
        <StyledItem
          key={category.id}
          sx={{ padding: '0' }}
          onMouseEnter={() => handleMouseEnter(category.id)}
          onMouseLeave={handleMouseLeave}
        >
          <StyledButton>
            <ListItemText sx={{ margin: '0' }}>
              <Link
                href={`/category_${category.link}`}
                onClick={handleCloseCatalog}
              >
                {capitalizeFirstLetter(category.name)}
              </Link>
            </ListItemText>
            {category.children.length > 0 && (
              <ArrowForwardIosIcon
                sx={{ marginLeft: '40px', fontSize: '16px' }}
              />
            )}
          </StyledButton>
          {category.children.length > 0 && (
            <SubCategoriesWrapper
              style={{
                visibility:
                  showSubcategories === category.id ? 'visible' : 'hidden',
                opacity: showSubcategories === category.id ? '1' : '0',
              }}
            >
              <StyledIconButton onClick={handleCloseCatalog}>
                <CloseIcon />
              </StyledIconButton>
              <SubCategoriesList>
                {category.children.map((item) => (
                  <StyledButton key={item.id} typebutton="subcategory">
                    <ListItemText
                      sx={{
                        margin: '0',
                      }}
                    >
                      <Link
                        href={`/category_${item.link}`}
                        onClick={handleCloseCatalog}
                      >
                        {capitalizeFirstLetter(item.name)}
                      </Link>
                    </ListItemText>
                  </StyledButton>
                ))}
              </SubCategoriesList>
            </SubCategoriesWrapper>
          )}
        </StyledItem>
      ))}
    </Box>
  );
};

export default MenuDesktop;
