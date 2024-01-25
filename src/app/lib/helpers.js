import { useState, useEffect } from 'react';

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
    isBrowser ? [window.innerWidth, window.innerHeight] : [0, 0]
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
