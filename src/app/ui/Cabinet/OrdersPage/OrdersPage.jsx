'use client';

import React from 'react';
import { useState, useEffect } from 'react';
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
import { getUserOrders } from '@/app/lib/getUserOrders';
import EmptyOrders from '@/app/ui/Cabinet/OrdersPage/EmptyOrders/EmptyOrders';

const OrdersPage = () => {
  const { isAuthorized, getUser } = useAuth();
  const authorized = isAuthorized();
  const user = authorized ? getUser() : null;
  const token = authorized ? localStorage.getItem('token') : null;
  const [orders, setOrders] = useState([]);
  const [phone, setPhone] = useState(null);

  const getUserObj = async (token, user) => {
    try {
      const url = `https://stage.eco-bike.com.ua/api/users/${user.id}`;
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (res.ok) {
        const data = await res.json();
        if (data) {
          data.phone ? setPhone('+' + data.phone) : '';
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserOrders = async (token, phone) => {
    try {
      const url = `https://stage.eco-bike.com.ua/api/orders/all`;
      const requestBody = {
        phone: phone.replace('+', ''),
      };
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      if (res.ok) {
        const data = await res.json();
        if (data) {
          setOrders(data.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (authorized) {
      getUserObj(token, user);
    }
  }, [authorized]);

  useEffect(() => {
    if (phone) {
      getUserOrders(token, phone);
    }
  }, [phone]);

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
