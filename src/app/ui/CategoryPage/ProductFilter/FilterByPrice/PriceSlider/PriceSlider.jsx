'use client';
import React, { useEffect } from 'react';
import { Slider } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setMinPrice, setMaxPrice } from '@/redux/slices/ProductFilterSlice';

const PriceSlider = ({ priceRange, categoryId }) => {
  const categoryProductsPrice = priceRange;
  const dispatch = useDispatch();
  const minPriceArr = useSelector((state) => state.productFilter.minPrice);
  const maxPriceArr = useSelector((state) => state.productFilter.maxPrice);
  const minPrice = () => {
    const obj = minPriceArr.find((item) => item.category === categoryId);
    const value = obj ? obj.value : Math.min(...categoryProductsPrice);
    return value;
  };
  const maxPrice = () => {
    const obj = maxPriceArr.find((item) => item.category === categoryId);
    const value = obj ? obj.value : Math.max(...categoryProductsPrice);
    return value;
  };
  const selectedPrice = useSelector(
    (state) => state.productFilter.selectedPrice,
  );
  useEffect(() => {
    const min = Math.min(...categoryProductsPrice);
    const max = Math.max(...categoryProductsPrice);
    if (selectedPrice == '') {
      dispatch(setMinPrice({ category: categoryId, value: min }));
      dispatch(setMaxPrice({ category: categoryId, value: max }));
    }
  }, [selectedPrice]);

  const handleSliderChange = (event, newValue) => {
    dispatch(setMinPrice({ category: categoryId, value: newValue[0] }));
    dispatch(setMaxPrice({ category: categoryId, value: newValue[1] }));
  };

  return (
    <>
      <Slider
        value={[minPrice(), maxPrice()]}
        onChange={handleSliderChange}
        min={Math.min(...categoryProductsPrice)}
        max={Math.max(...categoryProductsPrice)}
        step={null}
        marks={categoryProductsPrice.map((price) => ({
          value: price,
          label: '',
        }))}
        valueLabelDisplay="off"
        aria-labelledby="range-slider"
      />
    </>
  );
};

export default PriceSlider;
