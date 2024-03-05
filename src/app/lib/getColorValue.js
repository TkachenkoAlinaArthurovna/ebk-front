import productColors from '@/app/lib/productColors';

export const getColorValue = (params, _id) => {
  if (params) {
    for (const param of params) {
      if (param.name.includes('Color')) {
        const colorName = param.value[0].toLowerCase().split('/');
        const colorArr = colorName.map((item, index) => {
          return productColors.find(
            (color) => color.name.toLowerCase() === colorName[index],
          );
        });
        const colorIdArr = [_id, ...colorArr];
        return colorArr ? colorIdArr : null;
      }
    }
  }
  return null;
};
