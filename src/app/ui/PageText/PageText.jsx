import { Box } from '@mui/material';
import { StyledText } from '@/app/ui/PageText/PageTextStyles';

const PageText = ({ children, color = '#000000' }) => {
  return (
    <Box>
      <StyledText color={color}>{children}</StyledText>
    </Box>
  );
};

export default PageText;
