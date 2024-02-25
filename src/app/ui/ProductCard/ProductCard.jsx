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
  StyledCardLink,
  StyledCardContent,
  StyledLink,
} from '@/app/ui/ProductCard/ProductCardStyles';
import { Box } from '@mui/material';
import getImageForProductCard from '@/app/lib/getImageForProductCard';
import { createLinkProduct } from '@/app/lib/createLinkProduct';
import { getColorValue } from '@/app/lib/getColorValue';

const ProductCard = ({ product }) => {
  const { name, picture, price, oldprice, params, _id } = product;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const arrId = cartProducts.map((item) => item._id);
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((path) => path);
  const link = createLinkProduct(name);

  const toggleFavoritesProduct = () => {
    dispatch(toggleFavorites(_id));
  };

  return (
    <StyledCard>
      <StyledCardLink>
        <StyledLink
          href={
            pathnames.length == 1
              ? `/${pathnames[0]}/${link}`
              : `/${pathnames[0]}/${pathnames[1]}/${pathnames[2]}/${link}`
          }
        >
          <Box
            sx={{
              height: '70%',
              marginBottom: '10px',
              '@media (max-width: 500px)': {
                height: '60%',
              },
              '@media (max-width: 400px)': {
                height: '74%',
              },
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
          <Title>{name}</Title>
        </StyledLink>
      </StyledCardLink>
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
