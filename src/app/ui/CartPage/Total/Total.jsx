'use client';

import PageText from '@/app/ui/PageText';
import { FormControlLabel, ListItemText } from '@mui/material';
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

const Total = ({ dirty, isValid }) => {
  return (
    <StyledPriceWrapper>
      <CartPageTitle>Разом</CartPageTitle>
      <StyledTotalBox mt={3} mb={1}>
        <StyledTotalText>2 товари на суму</StyledTotalText>
        <PageText>25 998 ₴</PageText>
      </StyledTotalBox>
      <StyledTotalBox mb={3}>
        <StyledTotalText>Знижка</StyledTotalText>
        <PageText>25 998 ₴</PageText>
      </StyledTotalBox>
      <StyledTotalBox>
        <StyledTotalText>Загальна сума</StyledTotalText>
        <StyledTotalPrice>25 998 ₴</StyledTotalPrice>
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
      <FormControlLabel
        sx={{ marginBottom: '14px' }}
        control={<Checkbox />}
        name={'termsAgreement'}
        label={'З умовами ознайомлений та погоджуюсь*'}
      />
      <StyledTermsTitle>
        Підтверджуючи замовлення, я приймаю умови:{' '}
      </StyledTermsTitle>
      <StyledList>
        <StyledListItem>
          <ListItemText>
            • положення про обробку персональних даних
          </ListItemText>
        </StyledListItem>
        <StyledListItem>
          <ListItemText>• угоди користувача</ListItemText>
        </StyledListItem>
      </StyledList>
    </StyledPriceWrapper>
  );
};
export default Total;
