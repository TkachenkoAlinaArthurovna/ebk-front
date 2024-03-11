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
} from '@/app/ui/CartPage/LoadingCartItem/LoadingCartItemStyles';
import { Box } from '@mui/material';
import { Skeleton } from '@mui/material';

const LoadingCartItem = (type = 'cart') => {
  return (
    <Wrapper type={type}>
      <CartItemWrapper type={type}>
        <CartProductWrapper type={type}>
          <StyledImageWrapper>
            <Skeleton sx={{ width: '100px', height: '76px' }}></Skeleton>
          </StyledImageWrapper>
          <Box sx={{ marginBottom: '16px' }}>
            <Skeleton sx={{ width: '194px', height: '48px' }}></Skeleton>
            <Skeleton sx={{ width: '194px', height: '24px' }}></Skeleton>
          </Box>
        </CartProductWrapper>
        <WrapperPlusMinusPrice type={type}>
          <StyledButtonGroup>
            <Skeleton sx={{ width: '20px', height: '20px' }}></Skeleton>
            <Skeleton sx={{ width: '20px', height: '20px' }}></Skeleton>
            <Skeleton sx={{ width: '20px', height: '20px' }}></Skeleton>
          </StyledButtonGroup>
          <Skeleton sx={{ width: '88px', height: '32px' }}></Skeleton>
        </WrapperPlusMinusPrice>
      </CartItemWrapper>
      <DeleteButtonWrapper>
        <StyledButton>
          <Skeleton sx={{ width: '100px', height: '28px' }}></Skeleton>
        </StyledButton>
      </DeleteButtonWrapper>
    </Wrapper>
  );
};

export default LoadingCartItem;
