'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAuth } from '@/redux/contexts/AuthContext';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PageTitle from '@/app/ui/PageTitle';
import Order from '@/app/ui/Cabinet/OrdersPage/Order';
import {
  Wrapper,
  OrdersWrapper,
  OrdersList,
  ButtonBox,
  StyledButton,
} from '@/app/ui/Cabinet/OrdersPage/OrdersPageStyles';
import { getUserObj } from '@/app/lib/getUserObj';
import EmptyOrders from '@/app/ui/Cabinet/OrdersPage/EmptyOrders/EmptyOrders';

const OrdersPage = () => {
  const { isAuthorized, getUser } = useAuth();
  const authorized = isAuthorized();
  const user = authorized ? getUser() : null;
  const token = authorized ? localStorage.getItem('token') : null;
  const orders = useSelector((state) => state.orders.orders);

  const allOrders =
    orders.length !== 0
      ? orders.map((order) => <Order key={order.id} order={order} />)
      : null;

  return (
    <>
      <Wrapper>
        <PageTitle>Мої замовлення</PageTitle>
        <OrdersWrapper>
          {orders.length !== 0 && <OrdersList>{allOrders}</OrdersList>}
          {orders.length == 0 && <EmptyOrders />}
          {/* <ButtonBox>
            <StyledButton
              endIcon={<ArrowDownwardIcon />}
              onClick={() => console.log('Load more')}
            >
              Показати ще
            </StyledButton>
          </ButtonBox> */}
        </OrdersWrapper>
      </Wrapper>
    </>
  );
};

export default OrdersPage;
