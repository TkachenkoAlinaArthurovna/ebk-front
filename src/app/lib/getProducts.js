import { notFound } from 'next/navigation';

export const getProducts = async (
  categoryId,
  page,
  setLoading,
  width,
  sortParam,
  price,
  setProducts,
  setVendors,
  setTotalPage,
  setPriceRange,
  // setParams,
) => {
  try {
    setLoading(true);
    // const limit = width > 700 ? 9 : 8;
    const limit = 30;
    let res;
    const sort =
      sortParam && sortParam !== 'popularity' ? `sort=${sortParam}&` : '';
    res = await fetch(
      `https://stage.eco-bike.com.ua/api/catalog/${categoryId}?${sort}page=${page}&limit=${limit}`,
      { next: { revalidate: 3600 } },
    );
    if (res.ok) {
      const data = await res.json();
      if (data) {
        if (!price) {
          setProducts(data.results);
          const duplicateArray = data.vendors.map((vendor) => [vendor, vendor]);
          const vendorsObj = {
            name: ['Vendor', 'Виробник'],
            values: duplicateArray,
          };
          setVendors(vendorsObj);
          setTotalPage(data.meta.totalPages);
        }
        setPriceRange(data.priceRange);
        // setParams(data.params);
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
