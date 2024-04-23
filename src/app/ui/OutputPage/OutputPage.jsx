'use client';

import { useDispatch } from 'react-redux';

import { removeCartProducts } from '@/redux/slices/CartSlice';
import { setDataForOrder } from '@/redux/slices/DataForOrderSlice';

import { useAuth } from '@/redux/contexts/AuthContext';

import { makeAnOrder } from '@/app/lib/makeAnOrder';
import { deleteAllCart } from '@/app/lib/deleteAllCart';

import Link from 'next/link';
import { Box } from '@mui/material';
import Content from '@/app/ui/Content';
import Success from '@/app/ui/CartPage/Success/Success';

const OutputPage = () => {
  const dispatch = useDispatch();
  const { isAuthorized, getUser } = useAuth();
  const authorized = isAuthorized();
  const token = authorized ? localStorage.getItem('token') : null;
  const userInfo = useSelector((state) => state.user.userInfo);
  const userCartProducts = useSelector(
    (state) => state.userCart.userCartProducts,
  );
  const selectedDelivery = useSelector(
    (state) => state.delivery.selectedDelivery,
  );
  const selectedPayment = useSelector((state) => state.payment.selectedPayment);
  const dataForOrder = useSelector((state) => state.dataForOrder.dataForOrder);

  const products = transformObjectsArray(userCartProducts);

  const cityRefAndRef = findCityRefAndRefByDescription(
    dataForOrder.department,
    dataForOrder.filteredDepartments,
  );

  function transformObjectsArray(objectsArray) {
    return objectsArray.map((obj) => ({
      id: obj.product.crmId,
      name: obj.product.name,
      costPerItem: obj.product.price,
      amount: obj.quantity,
      description: '',
      discount: '',
      sku: obj.product.vendorCode,
    }));
  }

  function findCityRefAndRefByDescription(description, objectsArray) {
    for (const obj of objectsArray) {
      if (obj.Description === description) {
        return { CityRef: obj.CityRef, Ref: obj.Ref };
      }
    }
    return null;
  }

  useEffect(() => {
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
      cityRefAndRef,
      products,
      dataForOrder.comment,
      dataForOrder.doNotCall,
    );
    dispatch(removeCartProducts());
    deleteAllCart(token);
    dispatch(setDataForOrder({ valueName: 'success', value: true }));
  }, []);

  return (
    <Content>
      <Success />
    </Content>
  );
};

export default OutputPage;
