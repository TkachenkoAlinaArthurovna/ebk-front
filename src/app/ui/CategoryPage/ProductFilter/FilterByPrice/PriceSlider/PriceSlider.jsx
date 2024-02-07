'use client';
import React, {useEffect} from 'react';
import { Slider } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
  setMinPrice,
  setMaxPrice,
} from '@/redux/slices/MinMaxFilterPriceSlice';

const PriceSlider = () => {
  const dispatch = useDispatch();
  const minPrice = useSelector((state) => state.minMaxFilterPrice.minPrice);
  const maxPrice = useSelector((state) => state.minMaxFilterPrice.maxPrice);

  const categoryProductsPrice = [
    7850, 15678, 11344, 24890, 18234, 9234, 20456, 27765, 13890, 22789,
  ];

  useEffect(() => {
    const min = Math.min(...categoryProductsPrice);
    const max = Math.max(...categoryProductsPrice);
    dispatch(setMinPrice(min));
    dispatch(setMaxPrice(max));
  }, [dispatch]);

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
