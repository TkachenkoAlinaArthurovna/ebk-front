import { useDispatch } from 'react-redux';

import { setDataForPaymentModal } from '@/redux/slices/DataForPaymentModalSlice';

import { dollar } from '@/app/lib/dollar';
import { sumUserPrices } from '@/app/lib/getTotalForCart';

import { Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';

import {
  StyledWrapper,
  StyledPaper,
  StyledIconButton,
  StyledButton,
  WrapperProducts,
  WrapperTotal,
  StyledTotalPrice,
  StyledTotalText,
} from '@/app/ui/CartPage/ModalPayment/ModalPaymentStyles';
import CartItem from '@/app/ui/CartPage/CartItem/CartItem';

const ModalPayment = ({
  dataForOrder,
  setDataForOrder,
  objForPostPayment,
  firstname,
  surname,
  userCartProducts,
  dataForPaymentModal,
}) => {
  const dispatch = useDispatch();
  const prices = sumUserPrices(userCartProducts);
  const renderProductNameInputs = () => {
    return userCartProducts.map((item, index) => (
      <input
        key={index}
        type="hidden"
        name="productName[]"
        value={item.product.name.replace(/"/g, '')}
      />
    ));
  };

  const renderProductPriceInputs = () => {
    return userCartProducts.map((item, index) => (
      <input
        key={index}
        type="hidden"
        name="productPrice[]"
        value={Math.ceil(item.product.price * dollar)}
      />
    ));
  };

  const renderProductCountInputs = () => {
    return userCartProducts.map((item, index) => (
      <input
        key={index}
        type="hidden"
        name="productCount[]"
        value={item.quantity}
      />
    ));
  };

  const productCarts = userCartProducts.map((product) => {
    return (
      <CartItem
        key={product.product.crmId}
        product={product}
        modal={true}
        type={'modal-cart'}
        userCartProducts={true}
        paymentModal={true}
      />
    );
  });

  return (
    <Modal
      open={dataForOrder.isOpenModalPayment}
      onClose={() => {
        dispatch(setDataForPaymentModal(''));
        // setDataForOrder((prev) => {
        //   return { ...prev, isOpenModalPayment: false };
        // });
        dispatch(
          setDataForOrder({ valueName: 'isOpenModalPayment', value: false }),
        );
      }}
    >
      <StyledPaper>
        <StyledWrapper>
          <Box></Box>
          <StyledIconButton
            onClick={() => {
              dispatch(setDataForPaymentModal(''));
              // setDataForOrder((prev) => {
              //   return { ...prev, isOpenModalPayment: false };
              // });
              dispatch(
                setDataForOrder({
                  valueName: 'isOpenModalPayment',
                  value: false,
                }),
              );
            }}
          >
            <CloseIcon />
          </StyledIconButton>
        </StyledWrapper>
        <WrapperProducts>{productCarts}</WrapperProducts>
        <WrapperTotal>
          <StyledTotalText>Загальна сума:</StyledTotalText>
          <StyledTotalPrice>{prices} ₴</StyledTotalPrice>
        </WrapperTotal>
        <StyledWrapper>
          <StyledButton
            onClick={() => {
              dispatch(setDataForPaymentModal(''));
              // setDataForOrder((prev) => {
              //   return { ...prev, isOpenModalPayment: false };
              // });
              dispatch(
                setDataForOrder({
                  valueName: 'isOpenModalPayment',
                  value: false,
                }),
              );
            }}
          >
            Повернутись до корзини
          </StyledButton>
          <form
            method="post"
            action="https://secure.wayforpay.com/pay"
            acceptCharset="utf-8"
            className="payment-form"
          >
            <input
              type="hidden"
              name="merchantAccount"
              value="Eco_bike_com_ua"
            />
            <input
              type="hidden"
              name="merchantDomainName"
              value="https://eco-bike.com.ua"
            />
            <input
              type="hidden"
              name="merchantSignature"
              value={`${dataForPaymentModal.merchantSignature ? dataForPaymentModal.merchantSignature : null}`}
            />
            <input type="hidden" name="language" value="UA" />
            {/* <input
              type="hidden"
              name="returnUrl"
              value="https://eco-bike.com.ua"
            /> */}
            <input
              type="hidden"
              name="orderReference"
              value={`${dataForPaymentModal.orderReference}`}
            />
            <input
              type="hidden"
              name="orderDate"
              value={`${objForPostPayment.orderDate}`}
            />
            <input
              type="hidden"
              name="amount"
              value={`${objForPostPayment.amount}`}
            />
            <input type="hidden" name="currency" value="UAH" />
            {renderProductNameInputs()}
            {renderProductPriceInputs()}
            {renderProductCountInputs()}
            <input
              type="hidden"
              name="clientAccountId"
              value={`${objForPostPayment.accountId}`}
            />
            {/* <input
              type="hidden"
              name="clientFirstName"
              value={`${firstname}`}
              // value={`Artem`}
            />
            <input
              type="hidden"
              name="clientLastName"
              value={`${surname}`}
              // value={`H`}
            /> */}
            <button type="submit" className="button-payment">
              Перейти до оплати
            </button>
          </form>
        </StyledWrapper>
      </StyledPaper>
    </Modal>
  );
};

export default ModalPayment;
