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
import { useState } from 'react';
import { capitalizeFirstLetter } from '@/app/lib/helpers';

const MenuDesktop = ({ handleCloseCatalog, categories }) => {
  const [showSubcategories, setShowSubcategories] = useState(null);

  let enterTimer; // Таймер для отслеживания движения мыши
  let leaveTimer; // Таймер для определения остановки курсора

  const handleMouseEnter = (categoryId) => {
    clearTimeout(leaveTimer); // Очищаем таймер остановки курсора, если есть
    enterTimer = setTimeout(() => {
      setShowSubcategories(categoryId);
    }, 500);
  };

  const handleMouseLeave = () => {
    clearTimeout(enterTimer); // Очищаем таймер движения мыши, если есть
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
              </SubCategoriesList>
            </SubCategoriesWrapper>
          )}
        </StyledItem>
      ))}
    </Box>
  );
};

export default MenuDesktop;
