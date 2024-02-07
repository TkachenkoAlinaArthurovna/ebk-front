import React from 'react';
import { AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PriceSlider from '@/app/ui/CategoryPage/ProductFilter/FilterByPrice/PriceSlider';
import MinMaxInputs from '@/app/ui/CategoryPage/ProductFilter/FilterByPrice/MinMaxInputs';

import {
  StyledAccordion,
  StyledAccordionBox,
  StyledAccordionTitle,
} from '@/app/ui/CategoryPage/ProductFilter/FilterByPrice/FilterByPriceStyles';

const FilterByPrice = () => {
  return (
    <StyledAccordionBox>
      <StyledAccordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <StyledAccordionTitle>Ціна</StyledAccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <PriceSlider />  
          <MinMaxInputs />
        </AccordionDetails>
      </StyledAccordion>
    </StyledAccordionBox>
  );
};

export default FilterByPrice;
