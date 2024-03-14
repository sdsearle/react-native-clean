import React, {useReducer} from 'react';
import {pokeReducer} from './PokeReducer';
import {PokeContext} from './PokeContext';

export const PokeProvider = ({children}) => {
  const [state, dispatch] = useReducer(pokeReducer, {
    pokemon: [],
  });

  return (
    <PokeContext.Provider value={{state, dispatch}}>
      {children}
    </PokeContext.Provider>
  );
};
