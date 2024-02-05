import TabsProductPage from '@/app/ui/ProductPage/TabsProductPage';
import SlidersProductPage from '@/app/ui/ProductPage/SlidersProductPage';
import Content from '@/app/ui/Content';

const ProductPage = () => {
  return (
    <>
      <Content>
        <p>Bread Crumbs</p>
      </Content>
      <TabsProductPage />
      <SlidersProductPage />
    </>
  );
};

export default ProductPage;
