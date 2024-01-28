'use client';

import InfoPagesMenu from '@/app/ui/InfoPagesMenu';
import Content from '@/app/ui/Content';
import { Box, styled } from '@mui/material';

const StyledPagesLayout = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 32px;
  gap: 32px;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    flex-direction: row;
    gap: 0;
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
