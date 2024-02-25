import {
  WrapperBox,
  Color,
  WrapperColors,
} from '@/app/ui/ProductCard/Colors/ColorsStyles';

const Colors = ({ colors }) => {
  return (
    <WrapperBox>
      {colors && colors.length == 1 && (
        <Color sx={{ backgroundColor: `${colors[0].value}` }} />
      )}
      {colors && colors.length == 2 && (
        <WrapperColors
          sx={{
            background: `linear-gradient(to right, ${colors[0].value} 50%, ${colors[1].value} 50%)`,
          }}
        ></WrapperColors>
      )}
    </WrapperBox>
  );
};

export default Colors;
