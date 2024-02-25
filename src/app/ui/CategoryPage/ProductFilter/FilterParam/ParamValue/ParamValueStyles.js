'use client';

import { styled, Box, Typography, Checkbox, AccordionDetails } from '@mui/material';

export const StyledAccordionDetails = styled(AccordionDetails)`
  padding: 16px;
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(73, 190, 183, 0);
    z-index: -1;
    transition: background-color 0.3s ease;
  }
  
  &:hover::before {
    background-color: rgba(73, 190, 183, 0.08);
  }

  &:hover {
    cursor: pointer;
  }
`;


export const StyledWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StyledParamValue = styled(Typography)`
  font-size: 16px;
  letter-spacing: 0.5px;
`;

export const StyledCheckbox = styled(Checkbox)`
  width: 18px;
  height: 18px;
  padding: 0;
  margin: 0;
  color: #999999;
`;