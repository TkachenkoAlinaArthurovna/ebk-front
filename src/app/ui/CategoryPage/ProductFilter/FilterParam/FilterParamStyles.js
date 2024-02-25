'use client';

import { styled, Box, Typography, Accordion } from '@mui/material';

export const StyledAccordion = styled(Accordion)`
  box-shadow: none;
  font-size: 18px;
  letter-spacing: 0.15px;
`;

export const StyledAccordionBox = styled(Box)`
  border-bottom: 1px solid #eaeaea;
`;

export const StyledAccordionTitle = styled(Typography)`
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.15px;
`;
