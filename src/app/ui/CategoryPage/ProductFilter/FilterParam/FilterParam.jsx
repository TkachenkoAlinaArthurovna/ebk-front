import React from 'react';
import { AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ParamValue from '@/app/ui/CategoryPage/ProductFilter/FilterParam/ParamValue';
import {
  StyledAccordion,
  StyledAccordionBox,
  StyledAccordionTitle,
} from '@/app/ui/CategoryPage/ProductFilter/FilterParam/FilterParamStyles';

const FilterParam = ({ paramName, paramValues }) => {
  const paramValue = paramValues.map((paramValue, index) => {
    return <ParamValue key={paramValue[0]} paramValue={paramValue[1]} />;
  });

  return (
    <StyledAccordionBox>
      <StyledAccordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <StyledAccordionTitle>{paramName[1]}</StyledAccordionTitle>
        </AccordionSummary>
        {paramValue}
      </StyledAccordion>
    </StyledAccordionBox>
  );
};

export default FilterParam;
