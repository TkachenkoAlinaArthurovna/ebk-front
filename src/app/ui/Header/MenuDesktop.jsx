import { ListItemText, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  StyledIconButton,
  StyledItem,
  StyledButton,
  SubCategoriesWrapper,
  SubCategoriesList,
  WrapperForScroll,
} from '@/app/ui/Header/HeaderStyles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from 'next/link';
import { useState } from 'react';
import { capitalizeFirstLetter } from '@/app/lib/helpers';

const MenuDesktop = ({ handleCloseCatalog, categories, heightMenu }) => {
  const [showSubcategories, setShowSubcategories] = useState(null);

  let enterTimer;
  let leaveTimer;

  const handleMouseEnter = (categoryId) => {
    clearTimeout(leaveTimer);
    enterTimer = setTimeout(() => {
      setShowSubcategories(categoryId);
    }, 500);
  };

  const handleMouseLeave = () => {
    clearTimeout(enterTimer);
    leaveTimer = setTimeout(() => {
      setShowSubcategories(null);
    }, 500);
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
          {category.children.length > 0 ? (
            <StyledButton>
              <ListItemText sx={{ margin: '0' }}>
                {capitalizeFirstLetter(category.name)}
              </ListItemText>
              {category.children.length > 0 && (
                <ArrowForwardIosIcon
                  sx={{ marginLeft: '40px', fontSize: '16px' }}
                />
              )}
            </StyledButton>
          ) : (
            <Link href={`/${category.link}`} onClick={handleCloseCatalog}>
              <StyledButton>
                <ListItemText sx={{ margin: '0' }}>
                  {capitalizeFirstLetter(category.name)}
                </ListItemText>
                {category.children.length > 0 && (
                  <ArrowForwardIosIcon
                    sx={{ marginLeft: '40px', fontSize: '16px' }}
                  />
                )}
              </StyledButton>
            </Link>
          )}
          {category.children.length > 0 && (
            <SubCategoriesWrapper
              style={{
                visibility:
                  showSubcategories === category.id ? 'visible' : 'hidden',
                opacity: showSubcategories === category.id ? '1' : '0',
                height: `${heightMenu}px`,
              }}
            >
              <StyledIconButton onClick={handleCloseCatalog}>
                <CloseIcon />
              </StyledIconButton>
              <SubCategoriesList>
                <WrapperForScroll>
                  {category.children.map((item) => (
                    <Link
                      key={item.id}
                      href={`/${item.link}`}
                      onClick={handleCloseCatalog}
                    >
                      <StyledButton typebutton="subcategory">
                        <ListItemText
                          sx={{
                            margin: '0',
                          }}
                        >
                          {capitalizeFirstLetter(item.name)}
                        </ListItemText>
                      </StyledButton>
                    </Link>
                  ))}
                </WrapperForScroll>
              </SubCategoriesList>
            </SubCategoriesWrapper>
          )}
        </StyledItem>
      ))}
    </Box>
  );
};

export default MenuDesktop;
