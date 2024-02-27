'use client';

import Link from 'next/link';
import PageText from '@/app/ui/PageText';
import { FormControlLabel } from '@mui/material';
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
  sumOldPrices,
  getProductsQuantity,
} from '@/app/lib/getTotalForCart';

const Total = ({ dirty, isValid, cartProducts }) => {
  const quantity = getProductsQuantity(cartProducts);
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
  const oldPrices = sumOldPrices(cartProducts);
  const prices = sumPrices(cartProducts);
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
      <StyledTotalBox>
        <StyledTotalText>Загальна сума</StyledTotalText>
        <StyledTotalPrice>{prices} ₴</StyledTotalPrice>
      </StyledTotalBox>
      <StyledCheckoutButton
        type="submit"
        variant="contained"
        disabled={!dirty || !isValid}
      >
        Замовлення підтверджую
      </StyledCheckoutButton>
      <FormControlLabel
        sx={{ marginBottom: '14px' }}
        control={<Field type="checkbox" name="termsAgreement" as={Checkbox} />}
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
    </StyledPriceWrapper>
  );
};
export default Total;