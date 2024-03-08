import {useState} from 'react';
import {UpdateCountUseCase} from './UpdateCountUseCase';

export const HomeViewModel = (updateCountUseCase: UpdateCountUseCase) => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    updateCountUseCase.updateCount(setCount);
  };

  return {count, updateCount};
};
