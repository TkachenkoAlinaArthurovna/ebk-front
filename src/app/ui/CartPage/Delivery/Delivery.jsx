'use client';

import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDelivery } from '@/redux/slices/DeliverySlice';
import {
  CartPageTitle,
  StyledAccordion,
} from '@/app/ui/CartPage/CartPageStyles';
import DeliveryItem from '@/app/ui/CartPage/DeliveryItem/DeliveryItem';
import TextField from '@mui/material/TextField';
import {
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  Radio,
  RadioGroup,
  Autocomplete,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Field } from 'formik';
import NovaPoshtaDepartment from '@/app/ui/CartPage/Delivery/novaPoshtaDepartment';
import NovaPoshtaPostmachines from '@/app/ui/CartPage/Delivery/NovaPoshtaPostmachines';
import Ukrposhta from '@/app/ui/CartPage/Delivery/Ukrposhta';

const Delivery = ({}) => {
  const dispatch = useDispatch();
  const selectedDelivery = useSelector(
    (state) => state.delivery.selectedDelivery,
  );

  return (
    <StyledAccordion defaultExpanded>
      <AccordionSummary
        sx={{ padding: '0' }}
        id="delivery-info"
        aria-controls="delivery-info-content"
        expandIcon={<ExpandMoreIcon />}
      >
        <CartPageTitle>Спосіб доставки</CartPageTitle>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        <RadioGroup
          name="delivery"
          defaultValue={selectedDelivery}
          onChange={(e) => dispatch(setSelectedDelivery(e.target.value))}
        >
          <NovaPoshtaDepartment />
          <NovaPoshtaPostmachines />
          <Ukrposhta />
        </RadioGroup>
      </AccordionDetails>
    </StyledAccordion>
  );
};

export default Delivery;
