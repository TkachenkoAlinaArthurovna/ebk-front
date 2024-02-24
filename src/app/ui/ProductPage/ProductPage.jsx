import TabsProductPage from '@/app/ui/ProductPage/TabsProductPage';
import SlidersProductPage from '@/app/ui/ProductPage/SlidersProductPage';
import Content from '@/app/ui/Content';
import BreadCrumbsDynamic from '@/app/ui/BreadCrumbsDynamic';

const ProductPage = ({ currentProduct, partsOfCategory }) => {
  return (
    <>
      <Content>
        <BreadCrumbsDynamic
          currentProduct={currentProduct}
          partsOfCategory={partsOfCategory}
        />
      </Content>
      <TabsProductPage currentProduct={currentProduct} />
      {/* <SlidersProductPage /> */}
    </>
  );
};

export default ProductPage;
