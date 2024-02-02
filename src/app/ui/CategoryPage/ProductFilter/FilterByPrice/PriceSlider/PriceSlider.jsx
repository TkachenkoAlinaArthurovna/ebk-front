import React from 'react';
import { SliderThumb } from '@mui/material/Slider';
import { AirbnbSlider } from '@/app/ui/CategoryPage/ProductFilter/FilterByPrice/PriceSlider/PriceSliderStyles';

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

const PriceSlider = () => {
  return (
    <AirbnbSlider
      slots={{ thumb: AirbnbThumbComponent }}
      getAriaLabel={(index) =>
        index === 0 ? 'Minimum price' : 'Maximum price'
      }
      defaultValue={[30, 70]}
    />
  );
};

export default PriceSlider;
