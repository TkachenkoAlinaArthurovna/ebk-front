'use client';
import React, { useEffect } from 'react';
import { Slider } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setMinPrice, setMaxPrice } from '@/redux/slices/ProductFilterSlice';

const PriceSlider = () => {
  const dispatch = useDispatch();
  const minPrice = useSelector((state) => state.productFilter.minPrice);
  const maxPrice = useSelector((state) => state.productFilter.maxPrice);
  const selectedPrice = useSelector(
    (state) => state.productFilter.selectedPrice,
  );
  const categoryProductsPrice = [
    7850, 15678, 11344, 24890, 18234, 9234, 20456, 27765, 13890, 122789,
  ];

  useEffect(() => {
    const min = Math.min(...categoryProductsPrice);
    const max = Math.max(...categoryProductsPrice);
    if (selectedPrice == '') {
      dispatch(setMinPrice(min));
      dispatch(setMaxPrice(max));
    }
  }, [selectedPrice]);

  const handleSliderChange = (event, newValue) => {
    dispatch(setMinPrice(newValue[0]));
    dispatch(setMaxPrice(newValue[1]));
  };

  return (
    <>
      <Slider
        value={[minPrice, maxPrice]}
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
