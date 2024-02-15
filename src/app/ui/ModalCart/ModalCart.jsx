'use client';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartModal } from '@/redux/slices/CartModalSlice';
import { toggleCart } from '@/redux/slices/CartSlice';
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
  const currentCard = useSelector((state) => state.cart.currentCard);
  console.log(currentCard);
  const isOpenModalCart = useSelector(
    (state) => state.cartModal.isOpenModalCart,
  );
  const cart = useSelector((state) => state.cart.cartProducts);
  const dispatch = useDispatch();
  const toggleModal = () => dispatch(toggleCartModal());
  const toggleCartProduct = () => {
    dispatch(toggleCart({ currentCard: currentCard, action: 'plus' }));
    dispatch(toggleCartModal());
  };
  return (
    <Modal open={isOpenModalCart} onClose={toggleModal}>
      <StyledPaper>
        <StyledWrapper>
          <StyledTitle>Кошик</StyledTitle>
          <StyledIconButton onClick={toggleModal}>
            <CloseIcon />
          </StyledIconButton>
        </StyledWrapper>
        <StyledWrapperForProduct></StyledWrapperForProduct>
        <StyledWrapper>
          <StyledButton>Продовжити покупки</StyledButton>
          <ButtonMain width={'276px'} onClick={toggleCartProduct}>
            Оформити замовлення
          </ButtonMain>
        </StyledWrapper>
      </StyledPaper>
    </Modal>
  );
};

export default ModalCart;
