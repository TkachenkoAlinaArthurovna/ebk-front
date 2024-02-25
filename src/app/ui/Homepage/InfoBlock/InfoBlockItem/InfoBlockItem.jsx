import React from 'react';
import ShadowBox from '@/app/ui/ShadowBox/ShadowBox';
import {
  StyledTitle,
  StyledText,
  StyledWrapper,
} from '@/app/ui/Homepage/InfoBlock/InfoBlockItem/InfoBlockItemStyles';

const InfoBlockItem = ({ title, text }) => {
  return (
    <ShadowBox $padding={'6%'}>
      <StyledWrapper>
        <StyledTitle variant="subtitle1">{title}</StyledTitle>
        <StyledText>{text}</StyledText>
      </StyledWrapper>
    </ShadowBox>
  );
};

export default InfoBlockItem;
