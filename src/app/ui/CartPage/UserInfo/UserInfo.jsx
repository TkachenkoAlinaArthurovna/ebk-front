'use client';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionDetails, AccordionSummary } from '@mui/material';
import {
  CartPageTitle,
  StyledAccordion,
} from '@/app/ui/CartPage/CartPageStyles';
import CartContactInfo from '@/app/ui/CartPage/CartContactInfo/CartContactInfo';

const UserInfo = ({ setErrors, cart, isValid, setInactively }) => {
  return (
    <StyledAccordion defaultExpanded>
      <AccordionSummary
        sx={{ padding: '0' }}
        id="contact-info"
        aria-controls="contact-info-content"
        expandIcon={<ExpandMoreIcon />}
      >
        <CartPageTitle>Контактна інформація</CartPageTitle>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <CartContactInfo setErrors={setErrors} setInactively={setInactively} />
      </AccordionDetails>
    </StyledAccordion>
  );
};
export default UserInfo;
