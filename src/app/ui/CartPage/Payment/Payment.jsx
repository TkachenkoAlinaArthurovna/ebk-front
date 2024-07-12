'use client';

import { Box } from '@mui/material';
import { useState } from 'react';
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
  const [flag, setFlag] = useState(false);
  const selectedPayment = useSelector((state) => state.payment.selectedPayment);
  return (
    <>
      <StyledAccordion defaultExpanded>
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
            // value={selectedPayment}
            onChange={(e) => dispatch(setSelectedPayment(e.target.value))}
            defaultValue="Visa/Mastercard • Google Pay • Apple Pay"
          >
            <FormControlLabel
              sx={{ padding: '0 0 24px 0' }}
              value="Visa/Mastercard • Google Pay • Apple Pay"
              control={<Field as={Radio} sx={{ padding: '0 16px 0 0' }} />}
              label="Visa/Mastercard • Google Pay • Apple Pay"
              onChange={(event) => {
                if (event.target.checked) {
                  setFlag(false);
                }
              }}
            />
            <FormControlLabel
              sx={{ padding: '0 0 24px 0' }}
              value="Накладений платіж Нова Пошта"
              control={<Field as={Radio} sx={{ padding: '0 16px 0 0' }} />}
              label="Накладений платіж Нова Пошта"
              onChange={(event) => {
                if (event.target.checked) {
                  setFlag(false);
                }
              }}
            />
            <FormControlLabel
              sx={{
                padding: '0 0 50px 0',
                '@media (max-width: 620px)': {
                  padding: '0 0 70px 0',
                },
              }}
              value="Оплата за реквізитами"
              control={<Field as={Radio} sx={{ padding: '0 16px 0 0' }} />}
              label="Оплата за реквізитами"
              onChange={(event) => {
                if (event.target.checked) {
                  setFlag(true);
                }
              }}
            />
            {flag && (
              <Box
                sx={{
                  position: 'absolute',
                  left: '30px',
                  bottom: '-12px',
                  fontSize: '16px',
                  lineHeight: '20px',
                  '@media (max-width: 620px)': {
                    bottom: '-26px',
                  },
                  '@media (max-width: 380px)': {
                    left: '0',
                    bottom: '-28px',
                    fontSize: '14px',
                  },
                }}
              >
                <Box>
                  IBAN UA853515330000026004052186782 РНОКПП/ЄДРПОУ 3026018634
                </Box>
                <Box>
                  <Box
                    component="span"
                    sx={{ fontWeight: '500', color: '#49BEB7' }}
                  >
                    Отримувач:
                  </Box>{' '}
                  ВОЛКОВ ЮРІЙ ЮРІЙОВИЧ
                </Box>
                <Box>
                  <Box
                    component="span"
                    sx={{
                      fontWeight: '500',
                      color: '#49BEB7',
                    }}
                  >
                    Призначення платежу:
                  </Box>{' '}
                  Оплата за товар
                </Box>
              </Box>
            )}
          </RadioGroup>
        </AccordionDetails>
      </StyledAccordion>
    </>
  );
};
export default Payment;
