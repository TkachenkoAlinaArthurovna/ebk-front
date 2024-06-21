'use client';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { removeCartProducts } from '@/redux/slices/CartSlice';
import { setDataForOrder } from '@/redux/slices/DataForOrderSlice';
import { setUserCartProducts } from '@/redux/slices/UserCartSlice';
import { setDataForPaymentModal } from '@/redux/slices/DataForPaymentModalSlice';

import { useAuth } from '@/redux/contexts/AuthContext';

import { makeAnOrder } from '@/app/lib/makeAnOrder';
import { deleteAllCart } from '@/app/lib/deleteAllCart';
import { getCart } from '@/app/lib/getCart';

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
        dataForOrder.settlement.Ref,
        dataForOrder.street.Present,
        dataForOrder.house,
        dataForOrder.flat,
        dataForOrder.cityRefAndRef,
        dataForOrder.products,
        dataForOrder.comment,
        dataForOrder.doNotCall,
      );
      deleteAllCart(token)
        .then(() => {
          getCart(token, setUserCartProducts, dispatch);
        })
        .catch((error) => {
          console.error('Error remove product from cart:', error);
        });
      dispatch(removeCartProducts());
      setSuccess(true);
      dispatch(
        setDataForOrder({
          valueName: 'isOpenModalPayment',
          value: false,
        }),
      );
      dispatch(
        setDataForPaymentModal({
          valueName: 'dataForPaymentModal',
          value: '',
        }),
      );
    }
  }, [token, userInfo, dataForOrder]);

  return (
    <Content>
      <Success />
    </Content>
  );
};

export default OutputPage;
