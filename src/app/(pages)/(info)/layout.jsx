'use client';

import InfoPagesMenu from '@/app/ui/InfoPagesMenu';
import Content from '@/app/ui/Content';
import { Box, styled } from '@mui/material';

const StyledPagesLayout = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export default function InfoPagesLayout({ children }) {
  return (
    <Content>
      <StyledPagesLayout>
        <InfoPagesMenu />
        {children}
      </StyledPagesLayout>
    </Content>
  );
}
