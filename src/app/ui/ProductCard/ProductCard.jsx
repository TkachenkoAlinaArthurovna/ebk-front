import { usePathname } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartModal } from '@/redux/slices/CartModalSlice';
import { setCurrentCard } from '@/redux/slices/CartSlice';
import { toggleFavorites } from '@/redux/slices/FavoritesSlice';
import CardMedia from '@mui/material/CardMedia';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Colors from '@/app/ui/ProductCard/Colors';
import Price from '@/app/ui/ProductCard/Price';
import {
  StyledCard,
  StyledIconButton,
  StyledIconFavoriteButton,
  Title,
  StyledCardContent,
  StyledLink,
} from '@/app/ui/ProductCard/ProductCardStyles';
import { Box } from '@mui/material';
import productColors from '@/app/lib/productColors';
import getImageForProductCard from '@/app/lib/getImageForProductCard';
import { createLinkProduct } from '@/app/lib/createLinkProduct';

const ProductCard = ({ product }) => {
  const { name, picture, price, oldprice, params, _id } = product;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const arrId = cartProducts.map((item) => item._id);
  const pathname = usePathname();
  const link = createLinkProduct(name);

  const toggleFavoritesProduct = () => {
    dispatch(toggleFavorites(_id));
  };

  const getColorValue = (params) => {
    for (const param of params) {
      if (param.name.includes('Color')) {
        const colorName = param.value[0].toLowerCase();
        const colorObject = productColors.find(
          (color) => color.name.toLowerCase() === colorName,
        );

        return colorObject ? colorObject.value : null;
      }
    }
    return null;
  };

  return (
    <StyledCard>
      <Box sx={{ height: '70%' }}>
        <StyledLink href={`${pathname}/${link}`}>
          <Box
            sx={{
              height: '70%',
            }}
          >
            <CardMedia
              component="img"
              alt={`${name}`}
              image={
                picture
                  ? getImageForProductCard(picture)
                  : '/images/noimageavailable.png'
              }
              sx={{
                height: '100%',
                marginBottom: '16px',
                borderRadius: '28px',
              }}
            />
          </Box>
          <Title
            sx={{
              height: '20%',
            }}
          >
            {name}
          </Title>
        </StyledLink>
      </Box>
      <StyledCardContent>
        <Colors colors={getColorValue(params)} />
        <Price price={price} oldprice={oldprice} fontSize={22} />
        <StyledIconButton
          onClick={() => {
            dispatch(toggleCartModal());
            dispatch(setCurrentCard(product));
          }}
        >
          {arrId.includes(_id) ? (
            <ShoppingCartIcon
              color="primary"
              sx={{ width: '24px', height: '24px' }}
            />
          ) : (
            <ShoppingCartIcon sx={{ width: '24px', height: '24px' }} />
          )}
        </StyledIconButton>
        <StyledIconFavoriteButton onClick={toggleFavoritesProduct}>
          {favorites.includes(_id) ? (
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
      </StyledCardContent>
    </StyledCard>
  );
};

export default ProductCard;
