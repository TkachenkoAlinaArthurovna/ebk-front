import CyrillicToTranslit from 'cyrillic-to-translit-js';

const cyrillicToTranslit = new CyrillicToTranslit({ preset: 'uk' });

export const createLinkProduct = (name) => {
  const link = cyrillicToTranslit
    .transform(`${name}`, '-')
    .toLowerCase()
    .replace(/,/g, '')
    .replace(/"/g, '')
    .replace(/\//g, '');
  return link;
};
