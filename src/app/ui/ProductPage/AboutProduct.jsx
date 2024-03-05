import { useDispatch } from 'react-redux';
import { toggleCartModal } from '@/redux/slices/CartModalSlice';
import { setCurrentCard } from '@/redux/slices/CartSlice';
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
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Delivery from '@/app/ui/ProductPage/Delivery';
import Pay from '@/app/ui/ProductPage/Pay';

const AboutProduct = ({ mainProduct, setMainProduct, arrProducts }) => {
  const { name, picture, price, oldprice, crmId, vendor } = mainProduct;
  const dispatch = useDispatch();

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
          }}
        >
          <Typography sx={{ width: '200px', color: '#6a6a6a' }}>
            Артикул: {crmId}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: '16px' }}>
          <Typography sx={{ width: '200px', color: '#6a6a6a' }}>
            Виробник: {vendor}
          </Typography>
        </Box>
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
          <StyledIconFavoriteButton>
            <FavoriteIcon sx={{ width: '24px', height: '24px' }} />
          </StyledIconFavoriteButton>
        </Box>
        <Delivery bike={true} />
        <Pay></Pay>
      </WrapperContent>
    </WrapperAboutProduct>
  );
};
export default AboutProduct;
