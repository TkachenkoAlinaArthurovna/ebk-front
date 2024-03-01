'use client';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionDetails, AccordionSummary } from '@mui/material';
import {
  CartPageTitle,
  StyledAccordion,
} from '@/app/ui/CartPage/CartPageStyles';
import CartContactInfo from '@/app/ui/CartPage/CartContactInfo/CartContactInfo';

const UserInfo = ({
  firstname,
  setFirstname,
  surname,
  setSurname,
  phone,
  email,
  setEmail,
}) => {
  return (
    <StyledAccordion>
      <AccordionSummary
        sx={{ padding: '0' }}
        id="contact-info"
        aria-controls="contact-info-content"
        expandIcon={<ExpandMoreIcon />}
      >
        <CartPageTitle>Контактна інформація</CartPageTitle>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <CartContactInfo
          firstname={firstname}
          setFirstname={setFirstname}
          surname={surname}
          setSurname={setSurname}
          phone={phone}
          email={email}
          setEmail={setEmail}
        />
      </AccordionDetails>
    </StyledAccordion>
  );
};
export default UserInfo;
