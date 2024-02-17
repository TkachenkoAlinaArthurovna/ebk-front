import productColors from '@/app/lib/productColors';

export const getColorValue = (params) => {
  for (const param of params) {
    if (param.name.includes('Color')) {
      const colorName = param.value[0].toLowerCase();
      const colorObject = productColors.find(
        (color) => color.name.toLowerCase() === colorName,
      );

      return colorObject ? colorObject.value : null;
    }
  }
  return null;
};
