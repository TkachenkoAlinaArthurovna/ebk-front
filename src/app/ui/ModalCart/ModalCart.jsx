'use client';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartModal } from '@/redux/slices/CartModalSlice';
import { Modal } from '@mui/material';
import {
  StyledWrapper,
  StyledPaper,
  StyledTitle,
  StyledIconButton,
  StyledWrapperForProduct,
  StyledButton,
} from '@/app/ui/ModalCart/ModalCartStyles';
import CloseIcon from '@mui/icons-material/Close';
import ButtonMain from '@/app/ui/ButtonMain';

const ModalCart = () => {
  const isOpenModalCart = useSelector(
    (state) => state.cartModal.isOpenModalCart,
  );
  const dispatch = useDispatch();
  const toggleCart = () => dispatch(toggleCartModal());
  return (
    <Modal open={isOpenModalCart} onClose={toggleCart}>
      <StyledPaper>
        <StyledWrapper>
          <StyledTitle>Кошик</StyledTitle>
          <StyledIconButton onClick={toggleCart}>
            <CloseIcon />
          </StyledIconButton>
        </StyledWrapper>
        <StyledWrapperForProduct></StyledWrapperForProduct>
        <StyledWrapper>
          <StyledButton>Продовжити покупки</StyledButton>
          <ButtonMain width={'276px'}>Оформити замовлення</ButtonMain>
        </StyledWrapper>
      </StyledPaper>
    </Modal>
  );
};

export default ModalCart;
