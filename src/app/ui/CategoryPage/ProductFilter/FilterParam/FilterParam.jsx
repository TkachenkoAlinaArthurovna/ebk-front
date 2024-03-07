import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ParamValue from '@/app/ui/CategoryPage/ProductFilter/FilterParam/ParamValue';
import {
  StyledAccordion,
  StyledAccordionBox,
  StyledAccordionTitle,
} from '@/app/ui/CategoryPage/ProductFilter/FilterParam/FilterParamStyles';

const FilterParam = ({ paramName, paramValues }) => {
  const checkedFilters = useSelector(
    (state) => state.productFilter.checkedFilters,
  );

  function isParamValueExists(array, paramValue) {
    return array.some((item) => item.paramValue === paramValue);
  }

  const paramValue = paramValues.map((paramValue, index) => {
    return (
      <ParamValue
        key={paramValue[0]}
        paramValue={
          paramValue[1].charAt(0).toUpperCase() + paramValue[1].slice(1)
        }
        paramValueEng={paramValue[0]}
        paramNameEng={paramName[0]}
      />
    );
  });

  const hasMatch = checkedFilters.some((item1) =>
    paramValue.some((item2) => item1.paramValue === item2.props.paramValue),
  );

  const [expanded, setExpanded] = useState(hasMatch ? true : false);

  return (
    <StyledAccordionBox>
      <StyledAccordion
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <StyledAccordionTitle>{paramName[1]}</StyledAccordionTitle>
        </AccordionSummary>
        {paramValue}
      </StyledAccordion>
    </StyledAccordionBox>
  );
};

export default FilterParam;
