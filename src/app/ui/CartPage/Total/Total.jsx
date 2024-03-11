'use client';

import Link from 'next/link';
import PageText from '@/app/ui/PageText';
import { FormControlLabel, Box } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import {
  CartPageTitle,
  StyledPriceWrapper,
  StyledCheckoutButton,
  StyledList,
  StyledListItem,
  StyledTotalBox,
  StyledTotalPrice,
  StyledTotalText,
  StyledTermsTitle,
} from '@/app/ui/CartPage/CartPageStyles';
import { Field } from 'formik';
import {
  sumPrices,
  sumUserPrices,
  sumOldPrices,
  sumUserOldPrices,
  getProductsQuantity,
  getUserProductsQuantity,
} from '@/app/lib/getTotalForCart';

const Total = ({
  dirty,
  isValid,
  cartProducts,
  settlement,
  department,
  authorized,
}) => {
  const quantity = authorized
    ? getUserProductsQuantity(cartProducts)
    : getProductsQuantity(cartProducts);
  const wordProduct = () => {
    if (quantity == 1) {
      return 'товар';
    }
    if (quantity > 1 && quantity < 5) {
      return 'товари';
    }
    if (quantity >= 5) {
      return 'товарів';
    }
  };
  const oldPrices = authorized
    ? sumUserOldPrices(cartProducts)
    : sumOldPrices(cartProducts);
  const prices = authorized
    ? sumUserPrices(cartProducts)
    : sumPrices(cartProducts);
  const discount = oldPrices.replace(/\s/g, '') - prices.replace(/\s/g, '');

  return (
    <StyledPriceWrapper>
      <CartPageTitle>Разом</CartPageTitle>
      <StyledTotalBox mt={3} mb={1}>
        <StyledTotalText>
          {quantity} {wordProduct()} на суму
        </StyledTotalText>
        <PageText>{oldPrices} ₴</PageText>
      </StyledTotalBox>
      <StyledTotalBox mb={3}>
        <StyledTotalText>Знижка</StyledTotalText>
        <PageText>{discount}</PageText>
      </StyledTotalBox>
      <StyledTotalBox
        sx={{
          '@media(max-width: 1024px)': {
            marginBottom: '40px',
          },
        }}
      >
        <StyledTotalText>Загальна сума</StyledTotalText>
        <StyledTotalPrice>{prices} ₴</StyledTotalPrice>
      </StyledTotalBox>
      <StyledCheckoutButton
        sx={{
          '@media (max-width: 1024px)': {
            display: 'none',
          },
        }}
        type="submit"
        variant="contained"
        disabled={!dirty || !isValid || settlement == '' || department == ''}
      >
        Замовлення підтверджую
      </StyledCheckoutButton>
      <Box
        sx={{
          '@media(max-width: 1024px)': {
            display: 'none',
          },
        }}
      >
        <FormControlLabel
          sx={{ marginBottom: '14px' }}
          control={
            <Field type="checkbox" name="termsAgreement" as={Checkbox} />
          }
          label="З умовами ознайомлений та погоджуюсь*"
        />
        <StyledTermsTitle>
          Підтверджуючи замовлення, я приймаю умови:{' '}
        </StyledTermsTitle>
        <StyledList>
          <StyledListItem>
            <Link href="/privacy-policy">• політики конфіденційності</Link>
          </StyledListItem>
        </StyledList>
      </Box>
    </StyledPriceWrapper>
  );
};
export default Total;
