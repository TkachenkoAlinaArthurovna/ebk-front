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
  flex-direction: column;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 120px;
`;

export const StyledPriceWrapper = styled(Box)`
  display: 'flex';
  flex-direction: 'column';
  width: 34%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const StyledOrderWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const StyledTotalText = styled(Typography)`
  font-size: 16px;
`;

export const CartPageTitle = styled(Typography)`
  font-size: 24px;
  font-weight: 500;
  @media (max-width: 900px) {
    font-size: 26px;
  }

  @media (max-width: 650px) {
    font-size: 22px;
  }
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
  @media (max-width: 1200px) {
    height: 44px;
  }
`;

export const StyledTermsTitle = styled(Typography)`
  margin-bottom: 16px;
  font-size: 16px;
  color: #6a6a6a;
`;

export const StyledList = styled(List)`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style: disc !important;
  color: #6a6a6a;
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
  display: flex;
  width: 138px;
  padding: 10px 0;
  @media (max-width: 1200px) {
    height: 44px;
  }
  @media (max-width: 700px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const WrapperCartProducts = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
