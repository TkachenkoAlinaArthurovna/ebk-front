import { useDispatch } from 'react-redux';
import { toggleCart } from '@/redux/slices/CartSlice';
import { Box } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PageText from '@/app/ui/PageText';
import Image from 'next/image';
import {
  StyledButton,
  StyledButtonGroup,
  StyledImageWrapper,
  StyledCartItemText,
  CartProductWrapper,
  CartItemWrapper,
  DeleteButtonWrapper,
} from '@/app/ui/CartPage/CartItem/CartItemStyles';
import getImageForProductCard from '@/app/lib/getImageForProductCard';
import Price from '@/app/ui/ProductCard/Price';

const CartItem = ({ product }) => {
  const { picture, price, oldprice, count } = product;
  const dispatch = useDispatch();

  const removeCartProduct = () => {
    dispatch(toggleCart({ currentCard: product, action: 'remove' }));
  };

  const minusCartProduct = () => {
    dispatch(toggleCart({ currentCard: product, action: 'minus' }));
  };

  const plusCartProduct = () => {
    dispatch(toggleCart({ currentCard: product, action: 'plus' }));
  };

  return (
    <Box mt={3}>
      <CartItemWrapper>
        <CartProductWrapper>
          <StyledImageWrapper>
            <Image
              src={
                picture
                  ? getImageForProductCard(picture)
                  : '/images/noimageavailable.png'
              }
              alt="item-preview"
              sizes="100%"
              fill
              style={{
                objectFit: 'contain',
                borderRadius: '16px',
              }}
            ></Image>
          </StyledImageWrapper>
          <Box>
            <StyledCartItemText>{product.name}</StyledCartItemText>
            <PageText color={'#6A6A6A'}>Код:</PageText>
          </Box>
        </CartProductWrapper>
        <Box
          sx={{
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
            gap: '35px',
          }}
        >
          <StyledButtonGroup>
            <StyledButton
              variant="text"
              onClick={count === 1 ? removeCartProduct : minusCartProduct}
            >
              -
            </StyledButton>
            <PageText>{count}</PageText>
            <StyledButton variant="text" onClick={plusCartProduct}>
              +
            </StyledButton>
          </StyledButtonGroup>
          <Price price={price} oldprice={oldprice} fontSize={22} />
        </Box>
      </CartItemWrapper>
      <DeleteButtonWrapper>
        <StyledButton
          onClick={removeCartProduct}
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
    </Box>
  );
};

export default CartItem;
