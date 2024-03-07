'use client';

import { Box, styled, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

export const StyledAccordionBox = styled(Box)`
  margin-top: 44px;
`;

export const StyledAccordion = styled(Accordion)`
  && {
    box-shadow: none;
    margin: 0;
    padding: 0;
  }
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
  && {
    padding: 0;
    margin: 0;
  }
`;

export const StyledAccordionDetails = styled(AccordionDetails)`
  && {
    padding: 0;
    margin: 0;
  }
`;

export const OrderInfoBlock = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #b5b5b5;
`;

export const StyledOrderInfo = styled(Typography)`
  width: 54%;
  font-size: 20px;
  font-weight: 400;
  padding-right: 20px;

  @media (max-width: 1100px) {
    font-size: 18px;
  }

  @media (max-width: 900px) {
    width: 50%;
    font-size: 16px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

export const PaymentInfo = styled(Typography)`
  width: 20%;
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 1100px) {
    font-size: 18px;
  }

  @media (max-width: 900px) {
    font-size: 16px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;
