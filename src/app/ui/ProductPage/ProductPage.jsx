'use client';
import { useEffect, useState } from 'react';
import TabsProductPage from '@/app/ui/ProductPage/TabsProductPage';
import SlidersProductPage from '@/app/ui/ProductPage/SlidersProductPage';
import Content from '@/app/ui/Content';
import BreadCrumbsDynamic from '@/app/ui/BreadCrumbsDynamic';
import ProductsList from '@/app/ui/CategoryPage/CategoryItems/ProductsList';

const ProductPage = ({ currentProduct, partsOfCategory }) => {
  const [filteredArr, setFilteredArray] = useState([]);

  useEffect(() => {
    const sessionArr = JSON.parse(sessionStorage.getItem('currentProduct'));
    if (!sessionArr || sessionArr.length === 0) {
      return;
    } else {
      const filterArr = sessionArr.filter(
        (obj) => obj._id !== currentProduct._id,
      );
      setFilteredArray(filterArr);
    }
  }, []);
  // console.log(filteredArr)
  return (
    <>
      <Content>
        <BreadCrumbsDynamic
          currentProduct={currentProduct}
          partsOfCategory={partsOfCategory}
        />
      </Content>
      <TabsProductPage currentProduct={currentProduct} />
      {filteredArr.length > 4 ? (
        <SlidersProductPage filteredArr={filteredArr} />
      ) : (
        // изменить стили для єтого компонента
        <ProductsList products={filteredArr} />
      )}
    </>
  );
};

export default ProductPage;
