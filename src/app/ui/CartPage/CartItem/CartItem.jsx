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

const CartItem = ({ product, modal, type }) => {
  const { picture, price, oldprice, count, crmId } = product;
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
    <Wrapper type={type}>
      <CartItemWrapper type="modal">
        <CartProductWrapper type="modal">
          <StyledImageWrapper>
            <Box
              component={'img'}
              src={
                picture
                  ? getImageForProductCard(picture)
                  : '/images/noimageavailable.png'
              }
              alt={product.name}
              style={{
                height: '100%',
                width: 'auto',
                borderRadius: '16px',
              }}
            ></Box>
          </StyledImageWrapper>
          <Box sx={{ marginBottom: '16px' }}>
            <StyledCartItemText>{product.name}</StyledCartItemText>
            <PageText color={'#6A6A6A'}>Код: {crmId}</PageText>
          </Box>
        </CartProductWrapper>
        <WrapperPlusMinusPrice type="modal">
          {modal ? null : (
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
          )}
          <Price price={price} oldprice={oldprice} fontSize={22} />
        </WrapperPlusMinusPrice>
      </CartItemWrapper>
      {modal ? null : (
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
      )}
    </Wrapper>
  );
};

export default CartItem;
