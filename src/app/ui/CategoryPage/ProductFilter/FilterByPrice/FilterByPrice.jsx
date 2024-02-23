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

const FilterByPrice = ({ priceRange, categoryId }) => {
  return (
    <StyledAccordionBox>
      <StyledAccordion defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <StyledAccordionTitle>Ціна</StyledAccordionTitle>
        </AccordionSummary>
        <AccordionDetails>
          <PriceSlider priceRange={priceRange} categoryId={categoryId} />
          <MinMaxInputs priceRange={priceRange} categoryId={categoryId} />
        </AccordionDetails>
      </StyledAccordion>
    </StyledAccordionBox>
  );
};

export default FilterByPrice;
