import React from 'react';
import { AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ParamValue from '@/app/ui/CategoryPage/ProductFilter/FilterParam/ParamValue';
import {
  StyledAccordion,
  StyledAccordionBox,
  StyledAccordionTitle,
} from '@/app/ui/CategoryPage/ProductFilter/FilterParam/FilterParamStyles';

const FilterParam = ({ paramName }) => {
  return (
    <StyledAccordionBox>
      <StyledAccordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <StyledAccordionTitle>{paramName}</StyledAccordionTitle>
        </AccordionSummary>
        <ParamValue paramValue="140-150" />
      </StyledAccordion>
    </StyledAccordionBox>
  );
};

export default FilterParam;
