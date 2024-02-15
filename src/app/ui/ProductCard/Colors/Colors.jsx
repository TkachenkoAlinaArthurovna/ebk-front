import { WrapperBox, Color } from '@/app/ui/ProductCard/Colors/ColorsStyles';
import Box from '@mui/system/Box';

const Colors = ({ colors }) => {
  return (
    <WrapperBox>
      {colors ? <Color sx={{ backgroundColor: `${colors}` }} /> : null}
    </WrapperBox>
  );
};

export default Colors;
