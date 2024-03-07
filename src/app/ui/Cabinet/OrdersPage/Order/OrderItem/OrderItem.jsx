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
import { dollar } from '@/app/lib/dollar';

const OrderItem = ({ product }) => {
  const totalUa = Math.ceil(product.price * dollar);

  const formatNumberWithSpaces = (number) => {
    const numString = String(number);
    let formattedNumber = '';
    let count = 0;

    for (let i = numString.length - 1; i >= 0; i--) {
      count++;
      formattedNumber = numString[i] + formattedNumber;
      if (count === 3 && i !== 0) {
        formattedNumber = ' ' + formattedNumber;
        count = 0;
      }
    }

    return formattedNumber;
  };
  return (
    <Wrapper>
      <ItemInfoBlock>
        <NameImageBlock>
          <ItemNameBlock>
            <ItemName variant="h5">{product.text}</ItemName>
            <ItemArticle variant="subtitle1">
              Код: {product.parameter}
            </ItemArticle>
          </ItemNameBlock>
        </NameImageBlock>
        <Quantity>{product.amount}</Quantity>
      </ItemInfoBlock>
      <ItemPriceBlock>
        <PriceBlock>
          <Price>{formatNumberWithSpaces(totalUa)} ₴</Price>
        </PriceBlock>
      </ItemPriceBlock>
    </Wrapper>
  );
};

export default OrderItem;
