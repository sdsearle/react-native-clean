import React from 'react';
import {ExampleHomeRepoProvider} from './ExampleHomeRepo';
import ExampleHomeMain from './ExampleHomeScreen';

//const repo: ExampleHomeRepo = ExampleHomeRepo.repo;
export function ExampleHome({navigation}) {
  //   const [count, setCount] = useState(0);

  return (
    <ExampleHomeRepoProvider>
      {/* <ExampleHomeRepoContext.Provider value={{count, setCount}}> */}
      <ExampleHomeMain navigation={navigation} />
      {/* </ExampleHomeRepoContext.Provider> */}
    </ExampleHomeRepoProvider>
  );
}
