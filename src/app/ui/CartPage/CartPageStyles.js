import {
  Typography,
  Box,
  List,
  Accordion,
  styled,
  Button,
} from '@mui/material';

export const StyledCartLayout = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 120px;
  gap: 80px;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const StyledPriceWrapper = styled(Box)`
  display: 'flex';
  flex-direction: 'column';
  width: 40%;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const StyledOrderWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 60%;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const StyledTotalText = styled(Typography)`
  font-size: 20px;
`;

export const CartPageTitle = styled(Typography)`
  font-size: 28px;
  font-weight: 500;
`;

export const StyledTotalBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledTotalPrice = styled(Typography)`
  font-size: 28px;
  font-weight: 500;
`;

export const StyledCheckoutButton = styled(Button)`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff !important;
  background-color: ${({ disabled }) =>
    disabled ? '#E5E5E5' : '#49BEB7'} !important;
  padding: 16px 24px;
  border-radius: 100px;
  font-weight: 500;
  margin: 24px 0px;
  text-transform: none;
  width: 100%;

  &:hover {
    background-color: #3ea39e;
  }
`;

export const StyledTermsTitle = styled(Typography)`
  font-size: 16px;
  color: #6a6a6a;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const StyledList = styled(List)`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style: disc !important;
  color: #6a6a6a;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const StyledListItem = styled(Box)`
  display: flex;
  padding: 0;
  margin-top: 0;
`;

export const StyledAccordion = styled(Accordion)`
  padding: 0;
  box-shadow: none !important;
  border: none !important;

  &::before {
    display: none;
  }
`;

export const StyledButtonEntry = styled(Button)`
  width: 138px;
  padding: 10px 0;
  @media (max-width: 1200px) {
    height: 44px;
  }
  @media (max-width: 900px) {
    height: 34px;
    font-size: 12px;
  }
`;
