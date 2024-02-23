import React from 'react';
import {
  Wrapper,
  ItemInfoBlock,
  ItemPriceBlock,
  Image,
  ItemNameBlock,
  ItemName,
  ItemArticle,
  Quantity,
  PriceBlock,
  Price,
  OldPrice,
  NameImageBlock,
} from '@/app/ui/Cabinet/OrdersPage/Order/OrderItem/OrderItemStyles';

const OrderItem = () => {
  return (
    <Wrapper>
      <ItemInfoBlock>
        <NameImageBlock>
          <Image />
          <ItemNameBlock>
            <ItemName variant="h5">Велосипед “Ardis Messina”</ItemName>
            <ItemArticle variant="subtitle1">Код: 200604769</ItemArticle>
          </ItemNameBlock>
        </NameImageBlock>
        <Quantity>1</Quantity>
      </ItemInfoBlock>
      <ItemPriceBlock>
        <PriceBlock>
          <Price>12 999 ₴</Price>
          <OldPrice>12 999 ₴</OldPrice>
        </PriceBlock>
      </ItemPriceBlock>
    </Wrapper>
  );
};

export default OrderItem;
