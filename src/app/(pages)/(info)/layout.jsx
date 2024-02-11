import InfoPagesMenu from '@/app/ui/InfoPagesMenu';
import Content from '@/app/ui/Content';
import BreadCrumbs from '@/app/ui/BreadCrumbs/BreadCrumbs';
import { StyledPagesLayout } from '@/app/(pages)/(info)/layoutStyles';

export default function InfoPagesLayout({ children }) {
  return (
    <Content>
      <BreadCrumbs />
      <StyledPagesLayout>
        <InfoPagesMenu />
        {children}
      </StyledPagesLayout>
    </Content>
  );
}
