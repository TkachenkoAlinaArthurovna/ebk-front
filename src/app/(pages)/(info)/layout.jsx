import InfoPagesMenu from '@/app/ui/InfoPagesMenu';
import Content from '@/app/ui/Content';
import { Box } from '@mui/material';

export default function InfoPagesLayout({ children }) {
  return (
    <Content>
      <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <InfoPagesMenu />
        {children}
      </Box>
    </Content>
  );
}