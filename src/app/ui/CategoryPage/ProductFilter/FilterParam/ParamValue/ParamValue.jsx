import React from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import {
  StyledWrapper,
  StyledParamValue,
  StyledCheckbox,
} from '@/app/ui/CategoryPage/ProductFilter/FilterParam/ParamValue/ParamValueStyles';

const ParamValue = ({ paramValue }) => {
  // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <AccordionDetails>
      <StyledWrapper>
        <StyledParamValue>{paramValue}</StyledParamValue>
        <StyledCheckbox
        //  {...label}
        />
      </StyledWrapper>
    </AccordionDetails>
  );
};

export default ParamValue;
