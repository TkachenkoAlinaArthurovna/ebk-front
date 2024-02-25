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
  width: 100%;
  border-bottom: 1px solid #b5b5b5;
`;

export const StyledOrderInfo = styled(Typography)`
  width: 60%;
  font-size: 24px;
  font-weight: 400;

  @media (max-width: 590px) {
    font-size: 22px;
  }

  @media (max-width: 508px) {
    font-size: 18px;
  }

  @media (max-width: 428px) {
    font-size: 16px;
  }

  @media (max-width: 428px) {
    font-size: 14px;
  }
`;

export const PaymentInfo = styled(Typography)`
  width: 20%;
  font-size: 24px;
  font-weight: 500;

  @media (max-width: 590px) {
    font-size: 22px;
  }

  @media (max-width: 508px) {
    font-size: 18px;
  }

  @media (max-width: 428px) {
    font-size: 16px;
  }

  @media (max-width: 428px) {
    font-size: 14px;
  }
`;