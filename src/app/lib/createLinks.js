import CyrillicToTranslit from 'cyrillic-to-translit-js';

const cyrillicToTranslit = new CyrillicToTranslit({ preset: 'uk' });

export const createLinks = (catalog) => {
  const catalogLinks = catalog.map((item) => {
    const itemLink = cyrillicToTranslit
      .transform(`${item.name}`, '-')
      .toLowerCase()
      .replace(/,/g, '');
    return { ...item, link: itemLink };
  });
  return catalogLinks;
};
