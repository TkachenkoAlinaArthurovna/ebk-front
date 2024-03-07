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
import { Box } from '@mui/material';
import { dollar } from '@/app/lib/dollar';

const Order = ({ order }) => {
  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;

    return `${formattedDay}.${formattedMonth}.${year}`;
  };

  const totalUa = Math.ceil(order.paymentAmount * dollar);

  const formatNumberWithSpaces = (number) => {
    const numString = String(number);
    let formattedNumber = '';
    let count = 0;

    for (let i = numString.length - 1; i >= 0; i--) {
      count++;
      formattedNumber = numString[i] + formattedNumber;
      if (count === 3 && i !== 0) {
        formattedNumber = ' ' + formattedNumber;
        count = 0;
      }
    }

    return formattedNumber;
  };

  const date = formatDate(order.orderTime);

  const getStatus = (statusId) => {
    if (statusId == 1) {
      return 'Новий';
    }
    if (statusId == 2) {
      return 'Підтверджено';
    }
    if (statusId == 3) {
      return 'На відправку';
    }
    if (statusId == 4) {
      return 'Відправлено';
    }
    if (statusId == 5) {
      return 'Продаж';
    }
    if (statusId == 6) {
      return 'Відмова';
    }
    if (statusId == 7) {
      return 'Повернення';
    }
  };

  const productsInOrder =
    order.products.length !== 0
      ? order.products.map((product) => (
          <OrderItem key={product.parameter} product={product} />
        ))
      : null;

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
              <Box sx={{ marginRight: '10px', color: '#49BEB7' }}>
                Замовлення #{order.id}
              </Box>
              {date}
            </StyledOrderInfo>
            <PaymentInfo variant="h5">
              {formatNumberWithSpaces(totalUa)} ₴
            </PaymentInfo>
            <PaymentInfo variant="h5">{getStatus(order.statusId)}</PaymentInfo>
          </OrderInfoBlock>
        </StyledAccordionSummary>
        <StyledAccordionDetails>{productsInOrder}</StyledAccordionDetails>
      </StyledAccordion>
    </StyledAccordionBox>
  );
};

export default Order;
