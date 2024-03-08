import React, {useReducer} from 'react';
import {ScarvContext} from './ScarvContext';
import {scarvReducer} from './ScarvReducer';

export const ScarvProvider = ({children}) => {
  const [state, dispatch] = useReducer(scarvReducer, {
    count: 0,
  });

  return (
    <ScarvContext.Provider value={{state, dispatch}}>
      {children}
    </ScarvContext.Provider>
  );
};
