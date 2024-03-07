import { Box } from '@mui/material';
import InfoPagesMenu from '@/app/ui/InfoPagesMenu';
import Content from '@/app/ui/Content';
import BreadCrumbs from '@/app/ui/BreadCrumbs/BreadCrumbs';
import {
  StyledPagesLayout,
  // StyledPageContent,
} from '@/app/(pages)/(info)/layoutStyles';

export default function InfoPagesLayout({ children }) {
  return (
    <Content>
      <BreadCrumbs />
      <StyledPagesLayout>
        <InfoPagesMenu cabinet={true} />
        <Box
          sx={{
            width: '60%',
            '@media (max-width: 700px)': {
              width: '100%',
            },
          }}
        >
          {children}
        </Box>
      </StyledPagesLayout>
    </Content>
  );
}
