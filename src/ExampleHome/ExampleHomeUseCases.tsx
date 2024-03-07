import {useContext} from 'react';
import {ExampleHomeRepoContext} from './ExampleHomeRepo';

export default (count: number) => {
  const {setCount} = useContext(ExampleHomeRepoContext);
  return setCount(count);
};
