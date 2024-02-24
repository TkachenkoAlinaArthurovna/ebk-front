'use client';

import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OrderItem from '@/app/ui/Cabinet/OrdersPage/Order/OrderItem';
import {
  StyledAccordionBox,
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionDetails,
  OrderInfoBlock,
  StyledOrderInfo,
  PaymentInfo,
} from '@/app/ui/Cabinet/OrdersPage/Order/OrderStyles';

const Order = () => {
  return (
    <StyledAccordionBox>
      <StyledAccordion>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <OrderInfoBlock>
            <StyledOrderInfo variant="h5">
              Замовлення #999999 31.01.2024
            </StyledOrderInfo>
            <PaymentInfo variant="h5">51 996 ₴</PaymentInfo>
            <PaymentInfo variant="h5">Сплачено</PaymentInfo>
          </OrderInfoBlock>
        </StyledAccordionSummary>
        <StyledAccordionDetails>
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </StyledAccordionDetails>
      </StyledAccordion>
    </StyledAccordionBox>
  );
};

export default Order;
