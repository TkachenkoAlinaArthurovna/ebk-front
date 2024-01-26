import React from 'react';
import PageTitle from '@/app/ui/PageTitle';
import InfoBlockItem from '@/app/ui/Homepage/InfoBlock/InfoBlockItem';
import GridContainer from '@/app/ui/GridContainer/GridContainer';
import Content from '@/app/ui/Content';
import { infoBlockData } from '@/app/lib/mockData';
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
        <GridContainer $columns_on_small_screen="1">
          {infoBlockItems}
        </GridContainer>
      </Content>
    </StyledContainer>
  );
};

export default InfoBlock;
