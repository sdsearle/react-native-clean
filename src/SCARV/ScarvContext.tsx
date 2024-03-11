import {Dispatch, createContext, useContext} from 'react';
import {ScarvActions} from './ScarvAction';

interface ScarvProps {
  state: ScarvState;
  dispatch: Dispatch<ScarvActions>;
}

export const ScarvContext = createContext<ScarvProps | undefined>(undefined);

export const useScarvContext = () => {
  const context = useContext(ScarvContext);
  if (!context) {
    throw new Error('useScarvContext must be used within a ScarvProvider');
  }
  return context;
};
