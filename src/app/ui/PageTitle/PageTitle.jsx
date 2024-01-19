import React from 'react';
import { StyledTitle, StyledBox } from '@/app/ui/PageTitle/PageTitleStyles';

/**
 * If you want to display text in the center.
 * @example
 * <Title position="center">Text</Title>
 */

const PageTitle = ({ children, position }) => {
  return (
    <StyledBox position={position}>
      <StyledTitle variant="h2">{children}</StyledTitle>
    </StyledBox>
  );
};

export default PageTitle;
