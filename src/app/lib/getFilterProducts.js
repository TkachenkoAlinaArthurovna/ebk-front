import { notFound } from 'next/navigation';

export const getFilterProducts = async (
  categoryId,
  page,
  setLoading,
  width,
  sortParam,
  vendorParam,
  price,
  filterParams,
  setProducts,
  setVendors,
  setTotalPage,
) => {
  try {
    setLoading(true);
    const limit = width > 700 ? 9 : 8;
    let res;
    const sort =
      sortParam && sortParam !== 'popularity' ? `sort=${sortParam}&` : '';
    const vendor = vendorParam ? `vendor=${vendorParam}&` : '';
    if (price || filterParams) {
      res = await fetch(
        `https://stage.eco-bike.com.ua/api/catalog/${categoryId}${!filterParams == '' ? '/' + filterParams : ''}?${vendor}${sort}price=${price}&page=${page}&limit=${limit}`,
        { next: { revalidate: 3600 } },
      );
    }
    if (res.ok) {
      const data = await res.json();
      if (data) {
        if (price) {
          setProducts(data.results);
          const duplicateArray = data.vendors.map((vendor) => [vendor, vendor]);
          const vendorsObj = {
            name: ['Vendor', 'Виробник'],
            values: duplicateArray,
          };
          setVendors(vendorsObj);
          setTotalPage(data.meta.totalPages);
        }
      }
    } else {
      setLoading(false);
      notFound();
    }
  } catch (error) {
    console.log(error);
    setLoading(false);
  }
};
