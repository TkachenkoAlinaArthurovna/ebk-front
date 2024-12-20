'use client';

import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDelivery } from '@/redux/slices/DeliverySlice';
import {
  CartPageTitle,
  StyledAccordion,
} from '@/app/ui/CartPage/CartPageStyles';
import { AccordionDetails, AccordionSummary, RadioGroup } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NovaPoshtaDepartment from '@/app/ui/CartPage/Delivery/NovaPoshtaDepartment';
import NovaPoshtaPostmachines from '@/app/ui/CartPage/Delivery/NovaPoshtaPostmachines';
import Ukrposhta from '@/app/ui/CartPage/Delivery/Ukrposhta';
import NovaPoshtaCourier from '@/app/ui/CartPage/Delivery/NovaPoshtaCourier';

const Delivery = ({ setDataForOrder }) => {
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
          value={selectedDelivery}
          onChange={(e) => dispatch(setSelectedDelivery(e.target.value))}
          // defaultValue="До відділення Нової Пошти"
        >
          <NovaPoshtaDepartment setDataForOrder={setDataForOrder} />
          <NovaPoshtaPostmachines setDataForOrder={setDataForOrder} />
          <NovaPoshtaCourier setDataForOrder={setDataForOrder} />
          {/* <Ukrposhta /> */}
        </RadioGroup>
      </AccordionDetails>
    </StyledAccordion>
  );
};

export default Delivery;
