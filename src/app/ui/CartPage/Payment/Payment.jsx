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
            value="Накладений платіж"
            control={<Field as={Radio} />}
            label="Накладений платіж"
          />
          <FormControlLabel
            value="Оплата на карту"
            control={<Field as={Radio} />}
            label="Оплата на карту"
          />
          <FormControlLabel
            value="Розрахунковий рахунок"
            control={<Field as={Radio} />}
            label="Розрахунковий рахунок"
          />
          <FormControlLabel
            value="Онлайн оплата"
            control={<Field as={Radio} />}
            label="Онлайн оплата"
          />
        </RadioGroup>
      </AccordionDetails>
    </StyledAccordion>
  );
};
export default Payment;
