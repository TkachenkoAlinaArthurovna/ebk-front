import { useState, useEffect } from 'react';

export const createInitials = (firstName, lastName) => {
  const getInitial = (string) => string.charAt(0).toUpperCase();
  return getInitial(firstName) + getInitial(lastName);
};

export const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
};

export const useDebounce = (func, milliseconds) => {
  const time = milliseconds || 400;
  let timer;

  return (event) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(func, time, event);
  };
};

export const useResize = () => {
  const isBrowser = typeof window !== 'undefined';
  const [size, setSize] = useState(
    isBrowser ? [window.innerWidth, window.innerHeight] : [0, 0],
  );

  useEffect(() => {
    if (!isBrowser) {
      return;
    }
    const resize = useDebounce(() => {
      setSize([window.innerWidth, window.innerHeight]);
    });

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [isBrowser]);

  return size;
};

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
