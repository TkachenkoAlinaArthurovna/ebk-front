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
        return '72px';
    }
  }};
  transform: ${({ swipertype }) => {
    switch (swipertype) {
      case 'main':
        return 'translate(0, -50%)';
    }
  }};
  cursor: pointer;
  @media (max-width: 1024px) {
    left: ${({ swipertype }) => {
      switch (swipertype) {
        case 'section':
          return '0px';
        case 'main':
          return '60px';
      }
    }};
  }
  @media (max-width: 788px) {
    width: 30px;
    height: 30px;
    left: ${({ swipertype }) => {
      switch (swipertype) {
        case 'section':
          return '0px';
        case 'main':
          return '40px';
      }
    }};
  }
  @media (max-width: 560px) {
    width: 20px;
    height: 20px;
    left: ${({ swipertype }) => {
      switch (swipertype) {
        case 'section':
          return '0px';
        case 'main':
          return '30px';
      }
    }};
  }
  @media (max-width: 414px) {
    left: ${({ swipertype }) => {
      switch (swipertype) {
        case 'section':
          return '0px';
        case 'main':
          return '30px';
      }
    }};
  }
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
        return '72px';
    }
  }};
  transform: ${({ swipertype }) => {
    switch (swipertype) {
      case 'main':
        return 'translate(0, -50%)';
    }
  }};
  cursor: pointer;
  @media (max-width: 1024px) {
    right: ${({ swipertype }) => {
      switch (swipertype) {
        case 'section':
          return '0px';
        case 'main':
          return '60px';
      }
    }};
  }
  @media (max-width: 788px) {
    width: 30px;
    height: 30px;
    right: ${({ swipertype }) => {
      switch (swipertype) {
        case 'section':
          return '0px';
        case 'main':
          return '40px';
      }
    }};
  }
  @media (max-width: 560px) {
    width: 20px;
    height: 20px;
    right: ${({ swipertype }) => {
      switch (swipertype) {
        case 'section':
          return '0px';
        case 'main':
          return '30px';
      }
    }};
  }
  @media (max-width: 414px) {
    right: ${({ swipertype }) => {
      switch (swipertype) {
        case 'section':
          return '0px';
        case 'main':
          return '30px';
      }
    }};
  }
`;
