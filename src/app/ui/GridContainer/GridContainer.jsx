'use client';

import React from 'react';
import { StyledGridContainer } from '@/app/ui/GridContainer/GridContainerStyles';

const GridContainer = ({ $columns_on_small_screen, children }) => {
  return (
    <StyledGridContainer columns_on_small_screen={$columns_on_small_screen}>
      {children}
    </StyledGridContainer>
  );
};

export default GridContainer;
