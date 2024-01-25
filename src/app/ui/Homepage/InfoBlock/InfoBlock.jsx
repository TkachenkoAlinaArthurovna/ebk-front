import React from 'react';
import PageTitle from '@/app/ui/PageTitle';
import InfoBlockItem from '@/app/ui/Homepage/InfoBlock/InfoBlockItem';
import GridContainer from '@/app/ui/GridContainer/GridContainer';
import { infoBlockData } from '@/app/lib/mockData';
import Content from '@/app/ui/Content/Content';
import { StyledContainer } from '@/app/ui/Homepage/InfoBlock/InfoBlockStyles';

const InfoBlock = () => {
  const data = infoBlockData;
  const infoBlockItems = data.map(({ title, text }) => {
    return <InfoBlockItem key={title} title={title} text={text} />;
  });

  return (
    <StyledContainer as="section">
      <Content>
        <PageTitle position="center">Чому саме електровелосипед?</PageTitle>
        <GridContainer>{infoBlockItems}</GridContainer>
      </Content>
    </StyledContainer>
  );
};

export default InfoBlock;
