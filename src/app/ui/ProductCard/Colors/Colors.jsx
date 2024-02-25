import { WrapperBox, Color } from '@/app/ui/ProductCard/Colors/ColorsStyles';
import Box from '@mui/system/Box';

const Colors = ({ colors }) => {
  console.log(colors);
  return (
    <WrapperBox>
      {colors && colors.length == 1 ? (
        <Color sx={{ backgroundColor: `${colors[0].value}` }} />
      ) : (
        console.log('hi')
      )}
    </WrapperBox>
  );
};

export default Colors;
