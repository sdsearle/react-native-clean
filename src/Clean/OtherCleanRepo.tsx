//var c = 0;

import {useRef} from 'react';

export const useOtherCleanRepo = () => {
  const c = useRef(0);
  const increment = () => {
    c.current = c.current + 1;
    console.log('other changed: ' + c.current);
  };

  return {c, increment};
};
