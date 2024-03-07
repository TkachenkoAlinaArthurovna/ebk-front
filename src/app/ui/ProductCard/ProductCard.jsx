import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth } from '@/redux/contexts/AuthContext';
import { toggleCartModal } from '@/redux/slices/CartModalSlice';
import { setCurrentCard } from '@/redux/slices/CartSlice';
import { setFavorites } from '@/redux/slices/FavoritesSlice';
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
import { deleteFavorites } from '@/app/lib/deleteFavorites';
import { addFavorites } from '@/app/lib/addFavorites';
import { getAllFavorites } from '@/app/lib/getAllFavorites';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { categoryName, varieties } = product;
  const arrProducts = varieties ? [product, ...varieties] : [product];
  const [mainProduct, setMainProduct] = useState(arrProducts[0]);
  const favorites = useSelector((state) => state.favorites.favorites);
  const categories = useSelector((state) => state.catalogLinks.catalogLinks);
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const arrId = cartProducts.map((item) => item._id);
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((path) => path);
  const link = createLinkProduct(mainProduct.name);
  const [favoritesFlag, setFavoritesFlag] = useState(
    checkProductIdInArray(mainProduct.crmId, favorites) ? true : false,
  );
  const { isAuthorized, getUser } = useAuth();
  const authorized = isAuthorized();
  const user = authorized ? getUser() : null;
  const token = authorized ? localStorage.getItem('token') : null;
  const favoritesCategoryName = findLinkByCategoryId(
    product.categoryId,
    categories,
  );

  function findLinkByCategoryId(categoryId, arrayOfObjects) {
    for (let i = 0; i < arrayOfObjects.length; i++) {
      if (arrayOfObjects[i].id === categoryId) {
        return arrayOfObjects[i].link;
      }
    }
    return null;
  }

  function checkProductIdInArray(productId, arrayOfObjects) {
    for (let i = 0; i < arrayOfObjects.length; i++) {
      const obj = arrayOfObjects[i];
      if (obj.product && obj.product.crmId === productId) {
        return true;
      }
    }
    return false;
  }

  const getAllFavorites = async (userId, token) => {
    try {
      const url = `https://stage.eco-bike.com.ua/api/favorites/user/${userId}`;
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (res.ok) {
        const data = await res.json();
        if (data) {
          dispatch(setFavorites(data));
        }
      }
    } catch (error) {}
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
                  : pathnames.length == 2 && pathnames[1] !== 'favorites'
                    ? `/${createLinkProduct(product.category.name)}/${link}`
                    : pathnames.length == 2 && pathnames[1] == 'favorites'
                      ? `/${favoritesCategoryName}/${link}`
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
                const updatedFavorites = await getAllFavorites(user.id, token);
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
      </StyledCardContent>
    </StyledCard>
  );
};

export default ProductCard;
