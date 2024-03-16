'use client';

import { Modal } from '@mui/material';
import {
  StyledWrapper,
  StyledPaper,
  StyledTitle,
  StyledIconButton,
  StyledWrapperForProduct,
  StyledButton,
} from '@/app/ui/CartPage/ModalPayment/ModalPaymentStyles';
import CartItem from '@/app/ui/CartPage/CartItem/CartItem';

import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';

import { dollar } from '@/app/lib/dollar';

const ModalPayment = ({
  isOpenModalPayment,
  setIsOpenModalPayment,
  objForPostPayment,
  firstname,
  surname,
  userCartProducts,
}) => {
  const renderProductNameInputs = () => {
    return userCartProducts.map((item, index) => (
      <input
        key={index}
        type="hidden"
        name="productName[]"
        value={item.product.name}
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

  return (
    <Modal
      open={isOpenModalPayment}
      onClose={() => {
        setIsOpenModalPayment(false);
      }}
    >
      <StyledPaper>
        <StyledWrapper>
          <Box></Box>
          <StyledIconButton
            onClick={() => {
              setIsOpenModalPayment(false);
            }}
          >
            <CloseIcon />
          </StyledIconButton>
        </StyledWrapper>
        <StyledWrapper>
          <StyledButton
            onClick={() => {
              setIsOpenModalPayment(false);
            }}
          >
            Повернутись до корзини
          </StyledButton>
          <form
            method="post"
            action="https://secure.wayforpay.com/pay"
            acceptCharset="utf-8"
          >
            <input type="hidden" name="merchantAccount" value="test_merch_n1" />
            <input
              type="hidden"
              name="merchantDomainName"
              value="https://eco-bike.com.ua"
            />
            {/* Підпис запиту */}
            <input
              type="hidden"
              name="merchantSignature"
              value={`${'merchantSignature'}`}
            />
            <input
              type="hidden"
              name="returnUrl"
              value="https://eco-bike.com.ua"
            />
            {/* Унікальний номер замовлення в системі торговця */}
            <input
              type="hidden"
              name="orderReference"
              value={`${'orderReference'}`}
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
            <input
              type="hidden"
              name="clientFirstName"
              value={`${firstname}`}
            />
            <input type="hidden" name="clientLastName" value={`${surname}`} />
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
