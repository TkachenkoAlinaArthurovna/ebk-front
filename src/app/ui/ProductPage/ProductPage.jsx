import TabsProductPage from '@/app/ui/ProductPage/TabsProductPage';
import SlidersProductPage from '@/app/ui/ProductPage/SlidersProductPage';
import Content from '@/app/ui/Content';

const ProductPage = ({ currentProduct }) => {
  return (
    <>
      <Content>
        <p>Bread Crumbs</p>
      </Content>
      <TabsProductPage currentProduct={currentProduct} />
      {/* <SlidersProductPage /> */}
    </>
  );
};

export default ProductPage;
