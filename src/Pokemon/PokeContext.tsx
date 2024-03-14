import {Dispatch, createContext, useContext} from 'react';
import {PokeState} from './PokeState';
import {PokeActions} from './PokeActions';

interface PokeProps {
  state: PokeState;
  dispatch: Dispatch<PokeActions>;
}

export const PokeContext = createContext<PokeProps | undefined>(undefined);

export const usePokeContext = () => {
  const context = useContext(PokeContext);
  if (!context) {
    throw new Error('usePokeContext must be used within a PokeProvider');
  }
  return context;
};
