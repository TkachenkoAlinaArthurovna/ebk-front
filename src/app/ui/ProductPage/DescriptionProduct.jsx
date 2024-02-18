import { useSelector, useDispatch } from 'react-redux';
import { toggleCartModal } from '@/redux/slices/CartModalSlice';
import { setCurrentCard } from '@/redux/slices/CartSlice';
import { Box, Typography, Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import {
  StyledImg,
  StyledGridOrder,
  StyleTypographyName,
  StyledTypography,
} from '@/app/ui/ProductPage/CaracteristicsProductStyles';
import { StyledIconFavoriteButton } from '@/app/ui/ProductPage/ProductPageStyles';
import Price from '@/app/ui/ProductCard/Price';
import ButtonMain from '@/app/ui/ButtonMain';

const DescriptionProduct = ({ currentProduct }) => {
  // const currentProduct = useSelector(
  //   (state) => state.currentProductPage.currentProduct,
  // );
  const { name, picture, description, price, oldprice } = currentProduct;
  const dispatch = useDispatch();
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
      <Grid container spacing={4}>
        <StyledGridOrder item lg={7} md={7} sm={12} xs={12}>
          <StyledTypography>Опис</StyledTypography>
          <Typography
            className="description"
            dangerouslySetInnerHTML={{ __html: description }}
            sx={{ lineHeight: '24px' }}
          />
        </StyledGridOrder>
        <Grid item lg={5} md={5} sm={12} xs={12}>
          <Box sx={{ marginBottom: '16px' }}>
            <StyleTypographyName>{name}</StyleTypographyName>
            <Typography sx={{ color: '#6A6A6A' }}>Код: id</Typography>
          </Box>
          <Box sx={{ marginBottom: '24px' }}>
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
                dispatch(setCurrentCard(currentProduct));
              }}
            >
              Купити
            </ButtonMain>
            <StyledIconFavoriteButton>
              <FavoriteIcon sx={{ width: '24px', height: '24px' }} />
            </StyledIconFavoriteButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default DescriptionProduct;
