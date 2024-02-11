import { useSelector, useDispatch } from 'react-redux';
import { toggleCartModal } from '@/redux/slices/CartModalSlice';
import { toggleFavorites } from '@/redux/slices/FavoritesSlice';
import Link from 'next/link';
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
} from '@/app/ui/ProductCard/ProductCardStyles';

const ProductCard = ({ id, img, name, colors, price, oldprice }) => {
  const productId = 'product1';
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const arrId = cartProducts.map((item) => item.id);
  const toggleFavoritesProduct = () => {
    dispatch(toggleFavorites(productId));
  };
  const toggleCart = () => dispatch(toggleCartModal());
  return (
    <StyledCard>
      <Link href="/category/product_id">
        <CardMedia
          component="img"
          alt="name"
          image="https://images.prom.ua/4434624546_miskij-elektrovelosiped-paola.jpg"
          sx={{ marginBottom: '16px', borderRadius: '28px' }}
        />
        <Title component="div">
          Міський електровелосипед Paola 500W 10 A/h
        </Title>
      </Link>
      <StyledCardContent>
        <Colors colors={colors} />
        <Price price={100000} oldprice={200000} fontSize={22} />
        <StyledIconButton onClick={toggleCart}>
          {arrId.includes(productId) ? (
            <ShoppingCartIcon
              color="primary"
              sx={{ width: '24px', height: '24px' }}
            />
          ) : (
            <ShoppingCartIcon sx={{ width: '24px', height: '24px' }} />
          )}
        </StyledIconButton>
        <StyledIconFavoriteButton onClick={toggleFavoritesProduct}>
          {favorites.includes(productId) ? (
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
