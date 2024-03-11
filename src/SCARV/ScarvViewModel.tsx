import {INCREMENT, RESET} from './ScarvAction';
import {useScarvContext} from './ScarvContext';

export const ScarvViewModel = () => {
  const {state, dispatch} = useScarvContext();

  const incrementCount = () => {
    dispatch(INCREMENT);
  };

  const reset = () => {
    dispatch(RESET);
  };

  return {state, incrementCount, reset};
};
