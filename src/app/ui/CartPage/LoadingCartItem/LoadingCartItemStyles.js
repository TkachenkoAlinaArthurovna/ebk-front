import { Box, Button, ButtonGroup, Typography, styled } from '@mui/material';

export const StyledImageWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  margin-right: 28px;
  width: 120px;
  height: 76px;
`;

export const CartItemWrapper = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const CartProductWrapper = styled(Box)`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  @media (max-width: 600px) {
    width: ${({ type }) => {
      switch (type) {
        case 'cart':
          return '100%';
      }
    }};
  }
  @media (max-width: 500px) {
    flex-direction: ${({ type }) => {
      switch (type) {
        case 'modal':
          return 'column-reverse';
      }
    }};
    align-items: ${({ type }) => {
      switch (type) {
        case 'modal':
          return 'start';
      }
    }};
  }
`;

export const DeleteButtonWrapper = styled(Box)`
  margin: 24px 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const StyledButton = styled(Button)`
  && {
    outline: none;
    background-color: transparent !important;
    font-size: 16px;
    color: #4d4d4d;
  }
  &&:hover {
    color: #dc362e;
  }
`;

export const StyledButtonGroup = styled(ButtonGroup)`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StyledOldPriceTypography = styled(Typography)`
  font-size: 16px;
  width: 80px;
  text-align: right;
  text-decoration-line: line-through;
  color: #6a6a6a;
`;

export const StyledPriceTypography = styled(Typography)`
  font-size: 16px;
  width: 80px;
  text-align: right;
  color: #dc362e;
`;

export const StyledCartItemText = styled(Box)`
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
`;

export const WrapperPlusMinusPrice = styled(Box)`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 35px;
  @media (max-width: 600px) {
    width: ${({ type }) => {
      switch (type) {
        case 'modal':
          return '100%';
        case 'cart':
          return '100%';
      }
    }};
  }
  @media (max-width: 500px) {
    width: ${({ type }) => {
      switch (type) {
        case 'modal':
          return '50%';
      }
    }};
    position: ${({ type }) => {
      switch (type) {
        case 'modal':
          return 'absolute';
      }
    }};
    right: ${({ type }) => {
      switch (type) {
        case 'modal':
          return '36px';
      }
    }};
    bottom: ${({ type }) => {
      switch (type) {
        case 'modal':
          return '110px';
      }
    }};
  }
`;

export const Wrapper = styled(Box)`
  border-bottom: ${({ type }) => {
    switch (type) {
      case 'cart':
        return '1px solid #EEEEEE';
    }
  }};
  margin-bottom: ${({ type }) => {
    switch (type) {
      case 'cart':
        return '16px';
    }
  }};
`;
