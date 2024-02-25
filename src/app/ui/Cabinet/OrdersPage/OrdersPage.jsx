'use client';

import React from 'react';
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

const OrdersPage = () => {
  return (
    <>
      <Wrapper>
        <PageTitle>Мої замовлення</PageTitle>
        <OrdersWrapper>
          <OrdersList>
            <Order />
            <Order />
            <Order />
          </OrdersList>
          <ButtonBox>
            <StyledButton
              endIcon={<ArrowDownwardIcon />}
              onClick={() => console.log('Load more')}
            >
              Показати ще
            </StyledButton>
          </ButtonBox>
        </OrdersWrapper>
      </Wrapper>
    </>
  );
};

export default OrdersPage;
