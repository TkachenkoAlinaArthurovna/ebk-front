'use client';

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
        <RadioGroup name="payment">
          <FormControlLabel
            value="Накладений платіж Нова Пошта"
            control={<Field as={Radio} />}
            label="Накладений платіж Нова Пошта"
          />
          <FormControlLabel
            value="Visa/Mastercard • Google Pay • Apple Pay"
            control={<Field as={Radio} />}
            label="Visa/Mastercard • Google Pay • Apple Pay"
          />
        </RadioGroup>
      </AccordionDetails>
    </StyledAccordion>
  );
};
export default Payment;
