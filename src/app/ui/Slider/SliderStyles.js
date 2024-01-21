'use client';

import { styled } from '@mui/system';
import Box from '@mui/material/Box';

export const SwiperPrev = styled(Box)`
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 100;
  top: ${({ swipertype }) => {
    switch (swipertype) {
      case 'section':
        return '4px';
      case 'main':
        return '50%';
    }
  }};
  right: ${({ swipertype }) => {
    switch (swipertype) {
      case 'section':
        return '62px';
    }
  }};
  left: ${({ swipertype }) => {
    switch (swipertype) {
      case 'main':
        return '24px';
    }
  }};
  cursor: pointer;
`;

export const SwiperNext = styled(Box)`
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 100;
  top: ${({ swipertype }) => {
    switch (swipertype) {
      case 'section':
        return '4px';
      case 'main':
        return '50%';
    }
  }};
  right: ${({ swipertype }) => {
    switch (swipertype) {
      case 'section':
        return '0px';
      case 'main':
        return '24px';
    }
  }};
  cursor: pointer;
`;
