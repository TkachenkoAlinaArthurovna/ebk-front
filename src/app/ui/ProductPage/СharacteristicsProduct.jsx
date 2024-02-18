import { useSelector, useDispatch } from 'react-redux';
import { toggleCartModal } from '@/redux/slices/CartModalSlice';
import { setCurrentCard } from '@/redux/slices/CartSlice';
import { Box, List, Typography, Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import {
  StyledImg,
  StyledGridOrder,
  StyledTypography,
  StyledListItem,
  StyleTypographyName,
} from '@/app/ui/ProductPage/CaracteristicsProductStyles';
import { StyledIconFavoriteButton } from '@/app/ui/ProductPage/ProductPageStyles';
import Price from '@/app/ui/ProductCard/Price';
import ButtonMain from '@/app/ui/ButtonMain';

const СharacteristicsProduct = ({ currentProduct }) => {
  // const currentProduct = useSelector(
  //   (state) => state.currentProductPage.currentProduct,
  // );
  const { name, picture, params, price, oldprice } = currentProduct;
  const mainPicture = (picture) => {
    if (picture && picture.length >= 1) {
      return picture[0];
    }
    if (!Array.isArray(picture)) {
      return picture;
    }
  };
  const dispatch = useDispatch();
  const toggleCart = () => dispatch(toggleCartModal());
  return (
    <Box>
      <Grid container spacing={4}>
        <StyledGridOrder item lg={7} md={7} sm={12} xs={12}>
          <StyledTypography>Характеристики</StyledTypography>
          <List disablePadding>
            {params.map((item) => (
              <StyledListItem key={item.name[0]}>
                <Typography sx={{ width: '50%' }}>{item.name[1]}</Typography>
                <Typography
                  sx={{ width: '50%', textAlign: 'end', color: '#6A6A6A' }}
                >
                  {item.value[1]}
                </Typography>
              </StyledListItem>
            ))}
          </List>
        </StyledGridOrder>
        <Grid item lg={5} md={5} sm={12} xs={12}>
          <Box sx={{ marginBottom: '16px' }}>
            <StyleTypographyName>{name}</StyleTypographyName>
            <Typography sx={{ color: '#6A6A6A' }}>Код: id</Typography>
          </Box>
          <Box
            sx={{
              marginBottom: '24px',
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
export default СharacteristicsProduct;
