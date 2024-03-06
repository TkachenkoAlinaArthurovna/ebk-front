import { usePathname } from 'next/navigation';
import { useState } from 'react';
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

const ProductCard = ({ product }) => {
  const { categoryName, varieties } = product;
  const arrProducts = varieties ? [product, ...varieties] : [product];
  const [mainProduct, setMainProduct] = useState(arrProducts[0]);
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.favorites);
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const arrId = cartProducts.map((item) => item._id);
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((path) => path);
  const link = createLinkProduct(mainProduct.name);

  const toggleFavoritesProduct = () => {
    dispatch(toggleFavorites(mainProduct._id));
  };

  return (
    <StyledCard>
      <StyledCardLink>
        <StyledLink
          href={
            pathnames.length == 1
              ? `/${pathnames[0]}/${link}`
              : pathnames.length == 3
                ? `/${pathnames[0]}/${pathnames[1]}/${pathnames[2]}/${link}`
                : pathnames.length == 0
                  ? `/${categoryName}/${link}`
                  : pathnames.length == 2
                    ? `/${createLinkProduct(mainProduct.category.name)}/${link}`
                    : '/not-found'
          }
        >
          <Box
            sx={{
              height: '68%',
              maxHeight: '200px',
              marginBottom: '10px',
              '@media (max-width: 600px)': {
                maxHeight: '190px',
              },
              '@media (max-width: 500px)': {
                maxHeight: '190px',
                height: '60%',
              },
              '@media (max-width: 400px)': {
                maxHeight: '120px',
                height: '74%',
              },
            }}
          >
            <CardMedia
              component="img"
              alt={`${mainProduct.name}`}
              image={
                mainProduct.picture
                  ? getImageForProductCard(mainProduct.picture)
                  : '/images/noimageavailable.png'
              }
              sx={{
                height: '100%',
                marginBottom: '16px',
                borderRadius: '28px',
              }}
            />
          </Box>
          <Title>{mainProduct.name}</Title>
        </StyledLink>
      </StyledCardLink>
      <StyledCardContent>
        <Colors
          arrProducts={arrProducts}
          mainProduct={mainProduct}
          setMainProduct={setMainProduct}
        />
        <Price
          price={mainProduct.price}
          oldprice={mainProduct.oldprice}
          fontSize={22}
        />
        <StyledIconButton
          onClick={() => {
            dispatch(toggleCartModal());
            dispatch(setCurrentCard(mainProduct));
          }}
        >
          {arrId.includes(mainProduct._id) ? (
            <ShoppingCartIcon
              color="primary"
              sx={{ width: '24px', height: '24px' }}
            />
          ) : (
            <ShoppingCartIcon sx={{ width: '24px', height: '24px' }} />
          )}
        </StyledIconButton>
        <StyledIconFavoriteButton onClick={toggleFavoritesProduct}>
          {favorites.includes(mainProduct._id) ? (
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
