import React, {Component, createContext, useState} from 'react';

export const ExampleHomeRepoContext = createContext({
  count: 0,
  setCount: (x: number) => {},
});

export const ExampleHomeRepoProvider = ({children}) => {
  const [count, setCount] = useState(0);
  const value = {count, setCount};
  return (
    <ExampleHomeRepoContext.Provider value={value}>
      {children}
    </ExampleHomeRepoContext.Provider>
  );
};
