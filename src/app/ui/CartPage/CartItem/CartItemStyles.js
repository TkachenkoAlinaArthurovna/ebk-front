import { Box, Button, ButtonGroup, Typography, styled } from '@mui/material';

export const StyledImageWrapper = styled(Box)`
  margin-right: 28px;
  position: relative;
  width: 60px;
  height: 38px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 16px;
    width: 84px;
    height: 84px;
  }
`;

export const CartItemWrapper = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CartProductWrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DeleteButtonWrapper = styled(Box)`
  margin: 24px 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const StyledButton = styled(Button)`
  && {
    outline: none;
    background-color: transparent !important;
    font-size: 20px;
    color: #212121;
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

export const StyledCartItemText = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    width: 400px;
    font-size: 28px;
  }
    
  @media (max-width: 480px) {
      font-size: 24px;
    width: 300px;
  }
`;
