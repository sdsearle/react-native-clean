import {useState} from 'react';
import {HomeInteractor} from './HomeInteractor';

export const HomeViewModel = (interactor: HomeInteractor) => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    interactor.updateCount(setCount);
  };

  return {count, updateCount};
};
