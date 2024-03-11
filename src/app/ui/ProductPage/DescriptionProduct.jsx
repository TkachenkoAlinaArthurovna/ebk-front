import { useSelector, useDispatch } from 'react-redux';
import { useAuth } from '@/redux/contexts/AuthContext';
import { toggleCartModal } from '@/redux/slices/CartModalSlice';
import { setCurrentCard } from '@/redux/slices/CartSlice';
import { setFavorites } from '@/redux/slices/FavoritesSlice';
import { setFavoritesMeta } from '@/redux/slices/FavoritesSlice';
import { Box, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  StyledImg,
  StyledWrapper,
  StyledLeft,
  StyledRight,
  StyleTypographyName,
  StyledTypography,
} from '@/app/ui/ProductPage/CaracteristicsProductStyles';
import { StyledIconFavoriteButton } from '@/app/ui/ProductPage/ProductPageStyles';
import Price from '@/app/ui/ProductCard/Price';
import ButtonMain from '@/app/ui/ButtonMain';
import { deleteFavorites } from '@/app/lib/deleteFavorites';
import { addFavorites } from '@/app/lib/addFavorites';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { getAllFavorites } from '@/app/lib/getAllFavorites';
import { checkProductIdInArray } from '@/app/lib/checkProductIdInArray';

const DescriptionProduct = ({
  mainProduct,
  favoritesFlag,
  setFavoritesFlag,
}) => {
  const { name, picture, description, price, oldprice, crmId } = mainProduct;
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();
  const { isAuthorized, getUser } = useAuth();
  const authorized = isAuthorized();
  const user = authorized ? getUser() : null;
  const token = authorized ? localStorage.getItem('token') : null;

  const mainPicture = (picture) => {
    if (picture && picture.length >= 1) {
      return picture[0];
    }
    if (!Array.isArray(picture)) {
      return picture;
    }
  };

  return (
    <Box>
      <StyledWrapper>
        <StyledLeft>
          <StyledTypography>Опис</StyledTypography>
          <Typography
            className="description"
            dangerouslySetInnerHTML={{ __html: description }}
            sx={{ lineHeight: '24px' }}
          />
        </StyledLeft>
        <StyledRight>
          <Box sx={{ marginBottom: '16px' }}>
            <StyleTypographyName>{name}</StyleTypographyName>
            <Typography sx={{ color: '#6A6A6A' }}>Артикул: {crmId}</Typography>
          </Box>
          <Box
            sx={{
              marginBottom: '24px',
              '@media (max-width: 900px)': {
                display: 'flex',
                justifyContent: 'center',
              },
            }}
          >
            <StyledImg src={mainPicture(picture)} />
          </Box>
          <Box sx={{ marginBottom: '32px' }}>
            <Price
              price={price}
              oldprice={oldprice}
              fontSize={28}
              productPage={true}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              marginBottom: '32px',
            }}
          >
            <ButtonMain
              width={'100%'}
              startIcon={<ShoppingCartIcon />}
              onClick={() => {
                dispatch(toggleCartModal());
                dispatch(setCurrentCard(mainProduct));
              }}
            >
              Купити
            </ButtonMain>
            {authorized && (
              <StyledIconFavoriteButton
                onClick={async () => {
                  setFavoritesFlag(!favoritesFlag);
                  try {
                    const isProductInFavorites = checkProductIdInArray(
                      mainProduct.crmId,
                      favorites,
                    );
                    if (isProductInFavorites) {
                      await deleteFavorites(user.id, mainProduct._id, token);
                    } else {
                      await addFavorites(user.id, mainProduct._id, token);
                    }
                    await getAllFavorites(
                      user.id,
                      token,
                      setFavorites,
                      setFavoritesMeta,
                      dispatch,
                    );
                  } catch (error) {
                    console.error(
                      'Помилка під час виконання операції з улюбленими елементами:',
                      error,
                    );
                  }
                }}
              >
                {favoritesFlag ? (
                  <FavoriteIcon
                    color="primary"
                    sx={{ width: '24px', height: '24px' }}
                  />
                ) : (
                  <FavoriteBorderIcon
                    color="primary"
                    sx={{ width: '24px', height: '24px' }}
                  />
                )}
              </StyledIconFavoriteButton>
            )}
          </Box>
        </StyledRight>
      </StyledWrapper>
    </Box>
  );
};
export default DescriptionProduct;
