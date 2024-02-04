import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import {
  WrapperAboutProduct,
  WrapperSlider,
  WrapperContent,
  WrapperColor,
  Color,
  StyledIconFavoriteButton,
} from '@/app/ui/ProductPage/ProductPageStyles';
import Slider from '@/app/ui/Slider';
import PageTitle from '@/app/ui/PageTitle';
import Price from '@/app/ui/ProductCard/Price';
import ButtonMain from '@/app/ui/ButtonMain';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Delivery from '@/app/ui/ProductPage/Delivery';
import Pay from '@/app/ui/ProductPage/Pay';

const AboutProduct = () => {
  const slides = [
    'https://images.prom.ua/4402122690_elektro-velosiped-elite-26.jpg',
    'https://images.prom.ua/4402123724_elektro-velosiped-elite-26.jpg',
    'https://images.prom.ua/4402124044_elektro-velosiped-elite-26.jpg',
    'https://images.prom.ua/4402124239_elektro-velosiped-elite-26.jpg',
  ];
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
        <WrapperSlider>
          <Slider
            spaceBetween={0}
            slidesPerView={1}
            pagination={false}
            slidesProductPage={slides}
          />
        </WrapperSlider>
      </Box>
      <WrapperContent>
        <PageTitle>Електро-велосипед "Elite", 26", 500W, 13A/h</PageTitle>
        <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: '16px' }}>
          <Typography sx={{ color: '#6a6a6a' }}>1810488191</Typography>
        </Box>
        <WrapperColor>
          <Typography sx={{ color: '#6a6a6a', marginBottom: '16px' }}>
            Доступні варіанти товару
          </Typography>
          <Box
            sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}
          >
            <Color sx={{ backgroundColor: '#D2B48C' }} />
          </Box>
        </WrapperColor>
        <Box sx={{ marginBottom: '32px' }}>
          <Price price={920} oldprice={828} fontSize={28} productPage={true} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            marginBottom: '32px',
          }}
        >
          <ButtonMain width={'100%'} startIcon={<ShoppingCartIcon />}>
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
