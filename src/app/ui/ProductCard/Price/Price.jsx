import Box from '@mui/system/Box';
import {
  WrapperBoxNew,
  WrapperBoxOld,
  Discount,
  DiscountProductPage,
} from '@/app/ui/ProductCard/Price/PriceStyles';
import { Typography } from '@mui/material';
import { dollar } from '@/app/lib/dollar';

const Price = ({ price, oldprice, fontSize, productPage }) => {
  const currencyRate = dollar;
  const priceUa = Math.ceil(price * currencyRate);
  const oldPriceUa = Math.ceil(oldprice * currencyRate);

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

  const formattedPriceUa = formatNumberWithSpaces(priceUa);
  const formattedOldPriceUa = formatNumberWithSpaces(oldPriceUa);

  if (!oldprice) {
    return (
      <WrapperBoxNew>
        <Typography
          sx={{
            fontSize: `${fontSize}px`,
            fontWeight: '500',
            '@media (max-width: 400px)': {
              fontSize: '16px',
            },
          }}
        >
          {formattedPriceUa} ₴
        </Typography>
      </WrapperBoxNew>
    );
  }
  if (oldprice) {
    const getDiscount = (priceUa, oldPriceUa) => {
      return Math.round(100 - (priceUa * 100) / oldPriceUa);
    };
    const discount = getDiscount(priceUa, oldPriceUa);

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {!productPage && <Discount>{`-${discount}%`}</Discount>}
        <WrapperBoxOld>
          <Typography sx={{ textDecoration: 'line-through' }}>
            {formattedOldPriceUa} ₴
          </Typography>
        </WrapperBoxOld>
        <WrapperBoxNew sx={{ color: '#DC362E' }}>
          <Typography
            sx={{
              fontSize: `${fontSize}px`,
              fontWeight: '500',
            }}
          >
            {formattedPriceUa} ₴
          </Typography>
          {productPage && (
            <DiscountProductPage>{`-${discount}%`}</DiscountProductPage>
          )}
        </WrapperBoxNew>
      </Box>
    );
  }
};

export default Price;
