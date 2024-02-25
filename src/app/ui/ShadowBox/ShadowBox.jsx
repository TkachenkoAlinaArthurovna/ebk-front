import React from 'react';
import { StyledBox } from '@/app/ui/ShadowBox/ShadowBoxStyles';

/**
 * If you want change custom padding size you can use props (example: 10px or 5% ).
 * Default padding is 10%
 * @example
 * <ShadowBox $padding="20px">{your component}</ShadowBox>
 */

const ShadowBox = ({ $padding, $justifyContent, children }) => {
  return (
    <StyledBox padding={$padding} justifyContent={$justifyContent}>
      {children}
    </StyledBox>
  );
};

export default ShadowBox;
