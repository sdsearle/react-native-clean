import {useContext} from 'react';
import {PokeRepoContext, usePokeRepo} from './CleanPokeRepo';

export const useGetPokemonColorUseCase = () => {
  const repo = useContext(PokeRepoContext);
  //console.log('use case repo' + JSON.stringify(repo));

  return repo.colors;
};
