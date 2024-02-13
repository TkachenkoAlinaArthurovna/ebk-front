import { Box } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PageText from '@/app/ui/PageText';
import Image from 'next/image';
import {
  StyledButton,
  StyledButtonGroup,
  StyledImageWrapper,
  StyledPriceTypography,
} from '@/app/ui/CartItem/CartItemStyles';
import { useState } from 'react';

const CartItem = ({ product }) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <Box mt={3}>
      <Box
        sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
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
            <PageText>{product.name}</PageText>
            <PageText color={'#6A6A6A'}>Код: {product.code}</PageText>
          </Box>
        </Box>

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
            <StyledPriceTypography>
              {product.oldPrice * count} ₴
            </StyledPriceTypography>
            <PageText color={'#DC362E'}>{product.price * count} ₴</PageText>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          my: '24px',
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        <StyledButton>
          <DeleteOutlineOutlinedIcon
            sx={{ fontSize: '24px', mr: '8px' }}
            style={{ color: '#4D4D4D' }}
          />
          <PageText color={'#4D4D4D'}>Видалити</PageText>
        </StyledButton>
      </Box>
    </Box>
  );
};

export default CartItem;
