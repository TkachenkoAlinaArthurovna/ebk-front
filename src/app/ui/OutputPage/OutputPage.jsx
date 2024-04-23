'use client';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeCartProducts } from '@/redux/slices/CartSlice';
import { setDataForOrder } from '@/redux/slices/DataForOrderSlice';

import { useAuth } from '@/redux/contexts/AuthContext';

import { makeAnOrder } from '@/app/lib/makeAnOrder';
import { deleteAllCart } from '@/app/lib/deleteAllCart';

import Content from '@/app/ui/Content';
import Success from '@/app/ui/CartPage/Success/Success';

const OutputPage = () => {
  const dispatch = useDispatch();
  const { isAuthorized, getUser } = useAuth();
  const authorized = isAuthorized();
  const token = authorized ? localStorage.getItem('token') : null;
  const userInfo = useSelector((state) => state.user.userInfo);
  const selectedDelivery = useSelector(
    (state) => state.delivery.selectedDelivery,
  );
  const selectedPayment = useSelector((state) => state.payment.selectedPayment);
  const dataForOrder = useSelector((state) => state.dataForOrder.dataForOrder);

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (
      token &&
      userInfo.phone != '' &&
      dataForOrder.settlement != '' &&
      success == false
    ) {
      makeAnOrder(
        token,
        userInfo.firstname,
        userInfo.surname,
        userInfo.phone,
        userInfo.email,
        selectedDelivery,
        selectedPayment,
        dataForOrder.settlement.Present,
        dataForOrder.department,
        dataForOrder.cityRefAndRef,
        dataForOrder.products,
        dataForOrder.comment,
        dataForOrder.doNotCall,
      );
      dispatch(removeCartProducts());
      deleteAllCart(token);
      dispatch(setDataForOrder({ valueName: 'success', value: true }));
      setSuccess(true);
    }
  }, [token, userInfo, dataForOrder]);

  return (
    <Content>
      <Success />
    </Content>
  );
};

export default OutputPage;
