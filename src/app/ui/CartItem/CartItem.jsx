import { Box } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PageText from '@/app/ui/PageText';
import Image from 'next/image';
import {
  StyledButton,
  StyledButtonGroup,
  StyledImageWrapper,
  StyledOldPriceTypography,
  StyledPriceTypography,
  StyledCartItemText,
  CartProductWrapper,
  CartItemWrapper,
  DeleteButtonWrapper,
} from '@/app/ui/CartItem/CartItemStyles';
import { useState } from 'react';

const CartItem = ({ product, handleRemove }) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <Box mt={3}>
      <CartItemWrapper>
        <CartProductWrapper>
          <StyledImageWrapper>
            <Image
              src={product.image}
              alt="item-preview"
              sizes="100%"
              fill
              style={{
                objectFit: 'contain',
              }}
            ></Image>
          </StyledImageWrapper>
          <Box>
            <StyledCartItemText>{product.name}</StyledCartItemText>
            <PageText color={'#6A6A6A'}>Код: {product.code}</PageText>
          </Box>
        </CartProductWrapper>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '35px' }}>
          <StyledButtonGroup>
            <StyledButton
              variant="text"
              onClick={handleDecrement}
              disabled={count === 1}
            >
              -
            </StyledButton>
            <PageText>{count}</PageText>
            <StyledButton variant="text" onClick={handleIncrement}>
              +
            </StyledButton>
          </StyledButtonGroup>
          <Box>
            <StyledOldPriceTypography>
              {product.oldPrice * count} ₴
            </StyledOldPriceTypography>
            <StyledPriceTypography>
              {product.price * count} ₴
            </StyledPriceTypography>
          </Box>
        </Box>
      </CartItemWrapper>
      <DeleteButtonWrapper>
        <StyledButton
          onClick={() => {
            handleRemove(product.code);
          }}
        >
          <DeleteOutlineOutlinedIcon
            sx={{ fontSize: '24px', mr: '8px' }}
            style={{ color: '#4D4D4D' }}
          />
          <PageText color={'#4D4D4D'}>Видалити</PageText>
        </StyledButton>
      </DeleteButtonWrapper>
    </Box>
  );
};

export default CartItem;
