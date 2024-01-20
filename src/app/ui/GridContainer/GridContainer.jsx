'use client';

import React from 'react';
import {StyledGridContainer} from '@/app/ui/GridContainer/GridContainerStyles'

const GridContainer = ({ children }) => {
  return <StyledGridContainer>{children}</StyledGridContainer>;
};

export default GridContainer;
