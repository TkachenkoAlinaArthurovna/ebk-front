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
import CartItem from '@/app/ui/CartPage/CartItem/CartItem';
import { useResize } from '@/app/lib/helpers';

const ModalCart = () => {
  const [width] = useResize();
  const currentCard = useSelector((state) => state.cart.currentCard);
  const isOpenModalCart = useSelector(
    (state) => state.cartModal.isOpenModalCart,
  );
  const cart = useSelector((state) => state.cart.cartProducts);
  const dispatch = useDispatch();
  const toggleModal = () => dispatch(toggleCartModal());
  const toggleCartProduct = () => {
    dispatch(toggleCart({ currentCard: currentCard, action: 'plusToCart' }));
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
        <StyledWrapperForProduct>
          <CartItem product={currentCard} modal={true} />
        </StyledWrapperForProduct>
        <StyledWrapper>
          <StyledButton onClick={toggleModal}>Продовжити покупки</StyledButton>
          <ButtonMain
            width={width <= 600 ? '100%' : '276px'}
            onClick={toggleCartProduct}
          >
            Додати до кошика
          </ButtonMain>
        </StyledWrapper>
      </StyledPaper>
    </Modal>
  );
};

export default ModalCart;
