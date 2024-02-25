'use client';

import React from 'react';
import { StyledGridContainer } from '@/app/ui/GridContainer/GridContainerStyles';

/**
 * If you want to display one grid column in small screen ( 650px or smaller ).
 * @example
 * <GridContainer $columns_on_small_screen="1">{your component}</GridContainer>
 */

const GridContainer = ({ $columns_on_small_screen, children }) => {
  return (
    <StyledGridContainer columns_on_small_screen={$columns_on_small_screen}>
      {children}
    </StyledGridContainer>
  );
};

export default GridContainer;
