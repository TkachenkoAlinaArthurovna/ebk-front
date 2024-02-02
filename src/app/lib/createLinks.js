import CyrillicToTranslit from 'cyrillic-to-translit-js';

const cyrillicToTranslit = new CyrillicToTranslit({ preset: 'uk' });

export const createLinks = (catalog) => {
  const catalogLinks = catalog.map((item) => {
    const itemLink = cyrillicToTranslit
      .transform(`${item.name}`, '-')
      .toLowerCase();
    return { ...item, link: itemLink };
  });
  return catalogLinks;
};
