import productColors from '@/app/lib/productColors';

export const getColorValue = (params) => {
  for (const param of params) {
    if (param.name.includes('Color')) {
      const colorName = param.value[0].toLowerCase().split('/');
      const colorArr = colorName.map((item, index) => {
        return productColors.find(
          (color) => color.name.toLowerCase() === colorName[index],
        );
      });

      console.log(colorArr);
      return colorArr ? colorArr : null;
    }
  }
  return null;
};
