import {
  WrapperBox,
  Color,
  WrapperColors,
} from '@/app/ui/ProductCard/Colors/ColorsStyles';
import { getColorValue } from '@/app/lib/getColorValue';

const Colors = ({ arrProducts, mainProduct, setMainProduct }) => {
  const colors = () => {
    const allColors = [];
    arrProducts.forEach((product) => {
      allColors.push(getColorValue(product.params, product._id));
    });
    return allColors;
  };
  const allColors = colors();

  const mainColor = getColorValue(mainProduct.params, mainProduct._id);

  const getIndexOfMainProduct = (id) => {
    for (let i = 0; i < arrProducts.length; i++) {
      if (arrProducts[i]._id === id) {
        return i;
      }
    }
    return -1;
  };

  return (
    <WrapperBox>
      {allColors.map((color) => {
        if (color && color.length == 2) {
          return (
            <Color
              key={color[0]}
              onClick={() => {
                setMainProduct(arrProducts[getIndexOfMainProduct(color[0])]);
              }}
              sx={{
                backgroundColor: `${color[1].value}`,
                scale: `${mainColor && mainColor[0] && color[0] == mainColor[0] ? '1' : '0.6'}`,
              }}
            />
          );
        }
        if (color && color.length > 2) {
          return (
            <WrapperColors
              key={color[0]}
              onClick={() => {
                setMainProduct(arrProducts[getIndexOfMainProduct(color[0])]);
              }}
              sx={{
                background: `linear-gradient(to right, ${color[1].value} 50%, ${color[2].value} 50%)`,
                scale: `${mainColor && mainColor[0] && color[0] == mainColor[0] ? '1' : '0.6'}`,
              }}
            ></WrapperColors>
          );
        }
      })}
    </WrapperBox>
  );
};

export default Colors;
