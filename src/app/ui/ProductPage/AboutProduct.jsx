import { useSelector, useDispatch } from 'react-redux';
import { useAuth } from '@/redux/contexts/AuthContext';
import { toggleCartModal } from '@/redux/slices/CartModalSlice';
import { setCurrentCard } from '@/redux/slices/CartSlice';
import { setFavorites } from '@/redux/slices/FavoritesSlice';
import { setFavoritesMeta } from '@/redux/slices/FavoritesSlice';
import { Box, Typography } from '@mui/material';
import {
  WrapperAboutProduct,
  WrapperSlider,
  WrapperContent,
  StyledIconFavoriteButton,
} from '@/app/ui/ProductPage/ProductPageStyles';
import Colors from '@/app/ui/ProductCard/Colors';
import Slider from '@/app/ui/Slider';
import PageTitle from '@/app/ui/PageTitle';
import Price from '@/app/ui/ProductCard/Price';
import ButtonMain from '@/app/ui/ButtonMain';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Delivery from '@/app/ui/ProductPage/Delivery';
import Pay from '@/app/ui/ProductPage/Pay';
import { deleteFavorites } from '@/app/lib/deleteFavorites';
import { addFavorites } from '@/app/lib/addFavorites';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { getAllFavorites } from '@/app/lib/getAllFavorites';
import { checkProductIdInArray } from '@/app/lib/checkProductIdInArray';

const AboutProduct = ({
  mainProduct,
  setMainProduct,
  arrProducts,
  favoritesFlag,
  setFavoritesFlag,
}) => {
  const { name, picture, price, oldprice, crmId, vendor } = mainProduct;
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();
  const { isAuthorized, getUser } = useAuth();
  const authorized = isAuthorized();
  const user = authorized ? getUser() : null;
  const token = authorized ? localStorage.getItem('token') : null;

  return (
    <WrapperAboutProduct>
      <Box
        sx={{
          width: '50%',
          display: 'flex',
          alignItems: 'flex-start',
          '@media (max-width: 700px)': {
            width: '100%',
            marginBottom: '16px',
          },
        }}
      >
        {Array.isArray(picture) && picture.length > 1 && (
          <WrapperSlider>
            <Slider
              spaceBetween={0}
              slidesPerView={1}
              pagination={false}
              slidesProductPage={picture}
            />
          </WrapperSlider>
        )}
        {Array.isArray(picture) && picture.length == 1 && (
          <WrapperSlider>
            <Box
              component="img"
              alt={`${name}`}
              src={picture[0]}
              sx={{
                width: 'auto',
                maxHeight: '500px',
                borderRadius: '28px',
              }}
            />
          </WrapperSlider>
        )}
        {!Array.isArray(picture) && (
          <WrapperSlider>
            <Box
              component="img"
              alt={`${name}`}
              src={picture ? picture : '/images/noimageavailable.png'}
              sx={{
                width: 'auto',
                maxHeight: '500px',
                borderRadius: '28px',
              }}
            />
          </WrapperSlider>
        )}
      </Box>
      <WrapperContent>
        <PageTitle>{name}</PageTitle>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            marginTop: '16px',
            '@media (max-width: 900px)': {
              justifyContent: 'start',
            },
          }}
        >
          <Typography sx={{ width: '200px', color: '#6a6a6a' }}>
            Артикул: {crmId}
          </Typography>
        </Box>
        {vendor && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end',
              margin: '16px 0',
              '@media (max-width: 900px)': {
                justifyContent: 'start',
              },
            }}
          >
            <Typography sx={{ width: '200px', color: '#6a6a6a' }}>
              Виробник: {vendor}
            </Typography>
          </Box>
        )}
        <Colors
          arrProducts={arrProducts}
          mainProduct={mainProduct}
          setMainProduct={setMainProduct}
        />
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
        <Delivery bike={true} />
        <Pay></Pay>
      </WrapperContent>
    </WrapperAboutProduct>
  );
};
export default AboutProduct;
