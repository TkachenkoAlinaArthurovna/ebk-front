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
        return '110px';
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
        case 'main':
          return '60px';
      }
    }};
  }
  @media (max-width: 788px) {
    width: 30px;
    height: 30px;
    top: ${({ swipertype }) => {
      switch (swipertype) {
        case 'section':
          return '8px';
      }
    }};
    left: ${({ swipertype }) => {
      switch (swipertype) {
        case 'main':
          return '40px';
      }
    }};
  }
  @media (max-width: 650px) {
    display: ${({ prevtype }) => {
      switch (prevtype) {
        case 'products':
          return 'none';
      }
    }};
    left: ${({ swipertype }) => {
      switch (swipertype) {
        case 'section':
          return '38px';
      }
    }};
    top: ${({ swipertype }) => {
      switch (swipertype) {
        case 'section':
          return '0px';
      }
    }};
  }
  @media (max-width: 560px) {
    display: ${({ swipertype }) => {
      switch (swipertype) {
        case 'main':
          return 'none';
      }
    }};
  }
  @media (max-width: 414px) {
    left: ${({ swipertype }) => {
      switch (swipertype) {
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
        return '48px';
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
        case 'main':
          return '60px';
      }
    }};
  }
  @media (max-width: 788px) {
    width: 30px;
    height: 30px;
    top: ${({ swipertype }) => {
      switch (swipertype) {
        case 'section':
          return '8px';
      }
    }};
    right: ${({ swipertype }) => {
      switch (swipertype) {
        case 'main':
          return '40px';
      }
    }};
  }
  @media (max-width: 650px) {
    display: ${({ nexttype }) => {
      switch (nexttype) {
        case 'products':
          return 'none';
      }
    }};
    right: ${({ swipertype }) => {
      switch (swipertype) {
        case 'section':
          return '38px';
      }
    }};
    top: ${({ swipertype }) => {
      switch (swipertype) {
        case 'section':
          return '0px';
      }
    }};
  }
  @media (max-width: 560px) {
    display: ${({ swipertype }) => {
      switch (swipertype) {
        case 'main':
          return 'none';
      }
    }};
  }
  @media (max-width: 414px) {
    right: ${({ swipertype }) => {
      switch (swipertype) {
        case 'main':
          return '30px';
      }
    }};
  }
`;
