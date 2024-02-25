'use client';

import { styled, Slider } from '@mui/material';

export const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.primary.main,
  height: 4,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: '#e9e9e9',
    boxShadow: '0px 1px 3px 1px #00000026',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
  },
  '& .MuiSlider-track': {
    height: 3,
  },
  '& .MuiSlider-rail': {
    color: '#E9E9E9',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
    height: 3,
  },
}));