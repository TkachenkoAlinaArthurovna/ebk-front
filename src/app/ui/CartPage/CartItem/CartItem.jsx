import { useDispatch } from 'react-redux';
import { toggleCart } from '@/redux/slices/CartSlice';
import { Box } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PageText from '@/app/ui/PageText';
import {
  StyledButton,
  StyledButtonGroup,
  StyledImageWrapper,
  StyledCartItemText,
  CartProductWrapper,
  CartItemWrapper,
  DeleteButtonWrapper,
  WrapperPlusMinusPrice,
  Wrapper,
} from '@/app/ui/CartPage/CartItem/CartItemStyles';
import getImageForProductCard from '@/app/lib/getImageForProductCard';
import Price from '@/app/ui/ProductCard/Price';
import { useAuth } from '@/redux/contexts/AuthContext';
import { deleteCartProduct } from '@/app/lib/deleteCartProduct';
import { addCartProduct } from '@/app/lib/addCartProduct';
import { deleteTotalCartProduct } from '@/app/lib/deleteTotalCartProduct';
import { setUserCartProducts } from '@/redux/slices/UserCartSlice';
import { removeUserCartProducts } from '@/redux/slices/UserCartSlice';
import { getCart } from '@/app/lib/getCart';

const CartItem = ({ product, modal, type, userCartProducts = false }) => {
  const { isAuthorized, getUser } = useAuth();
  const authorized = isAuthorized();
  const token = authorized ? localStorage.getItem('token') : null;

  const { name, picture, price, oldprice, count, crmId } = userCartProducts
    ? product.product
    : product;

  const quantity = userCartProducts ? product.quantity : null;

  const dispatch = useDispatch();

  const removeCartProduct = () => {
    dispatch(toggleCart({ currentCard: product, action: 'remove' }));
  };

  const removeUserCartProduct = () => {
    deleteTotalCartProduct(token, crmId)
      .then(() => {
        getCart(token, setUserCartProducts, dispatch);
      })
      .catch((error) => {
        console.error('Error adding product to cart:', error);
      });
  };

  const minusCartProduct = () => {
    dispatch(toggleCart({ currentCard: product, action: 'minus' }));
  };

  const minusUserCartProduct = () => {
    deleteCartProduct(token, crmId)
      .then(() => {
        getCart(token, setUserCartProducts, dispatch);
      })
      .catch((error) => {
        console.error('Error adding product to cart:', error);
      });
  };

  const plusCartProduct = () => {
    dispatch(toggleCart({ currentCard: product, action: 'plus' }));
  };

  const plusUserCartProduct = () => {
    addCartProduct(token, crmId)
      .then(() => {
        getCart(token, setUserCartProducts, dispatch);
      })
      .catch((error) => {
        console.error('Error adding product to cart:', error);
      });
  };

  return (
    <Wrapper type={type}>
      <CartItemWrapper type={type}>
        <CartProductWrapper type={type}>
          <StyledImageWrapper>
            <Box
              component={'img'}
              src={
                picture
                  ? getImageForProductCard(picture)
                  : '/images/noimageavailable.png'
              }
              alt={name}
              style={{
                height: '100%',
                width: 'auto',
                borderRadius: '16px',
              }}
            ></Box>
          </StyledImageWrapper>
          <Box sx={{ marginBottom: '16px' }}>
            <StyledCartItemText>{name}</StyledCartItemText>
            <PageText color={'#6A6A6A'}>Код: {crmId}</PageText>
          </Box>
        </CartProductWrapper>
        <WrapperPlusMinusPrice type={type}>
          {modal ? null : (
            <StyledButtonGroup>
              <StyledButton
                variant="text"
                onClick={
                  count == 1 || quantity == 1
                    ? authorized
                      ? removeUserCartProduct
                      : removeCartProduct
                    : authorized
                      ? minusUserCartProduct
                      : minusCartProduct
                }
              >
                -
              </StyledButton>
              <PageText>{quantity ? quantity : count}</PageText>
              <StyledButton
                variant="text"
                onClick={authorized ? plusUserCartProduct : plusCartProduct}
              >
                +
              </StyledButton>
            </StyledButtonGroup>
          )}
          <Price price={price} oldprice={oldprice} fontSize={22} />
        </WrapperPlusMinusPrice>
      </CartItemWrapper>
      {modal ? null : (
        <DeleteButtonWrapper>
          <StyledButton
            onClick={authorized ? removeUserCartProduct : removeCartProduct}
            sx={{
              '&:hover': {
                color: 'red',
              },
            }}
          >
            <DeleteOutlineOutlinedIcon
              sx={{
                fontSize: '18px',
                marginRight: '4px',
                marginBottom: '2px',
                '&:hover': {
                  color: '#dc362e',
                },
              }}
            />
            Видалити
          </StyledButton>
        </DeleteButtonWrapper>
      )}
    </Wrapper>
  );
};

export default CartItem;
