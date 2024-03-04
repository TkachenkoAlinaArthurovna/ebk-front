'use client';

import { useDispatch, useSelector } from 'react-redux';
import { setSelectedPayment } from '@/redux/slices/PaymentSlice';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import {
  CartPageTitle,
  StyledAccordion,
} from '@/app/ui/CartPage/CartPageStyles';
import { Field } from 'formik';

const Payment = ({}) => {
  const dispatch = useDispatch();
  const selectedPayment = useSelector((state) => state.payment.selectedPayment);
  return (
    <StyledAccordion>
      <AccordionSummary
        sx={{ padding: '0' }}
        id="payment-info"
        aria-controls="payment-info-content"
        expandIcon={<ExpandMoreIcon />}
      >
        <CartPageTitle>Оплата</CartPageTitle>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <RadioGroup
          name="payment"
          value={selectedPayment}
          onChange={(e) => dispatch(setSelectedPayment(e.target.value))}
        >
          <FormControlLabel
            sx={{ padding: '0 0 24px 0' }}
            value="Visa/Mastercard • Google Pay • Apple Pay"
            control={<Field as={Radio} sx={{ padding: '0 16px 0 0' }} />}
            label="Visa/Mastercard • Google Pay • Apple Pay"
          />
          <FormControlLabel
            value="Накладений платіж Нова Пошта"
            control={<Field as={Radio} sx={{ padding: '0 16px 0 0' }} />}
            label="Накладений платіж Нова Пошта"
          />
        </RadioGroup>
      </AccordionDetails>
    </StyledAccordion>
  );
};
export default Payment;
