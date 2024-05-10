import React from 'react';
import { StyledBox } from '@/app/ui/ShadowBox/ShadowBoxStyles';

const ShadowBox = ({ $padding, $justifyContent, children }) => {
  return (
    <StyledBox padding={$padding} justifyContent={$justifyContent}>
      {children}
    </StyledBox>
  );
};

export default ShadowBox;
