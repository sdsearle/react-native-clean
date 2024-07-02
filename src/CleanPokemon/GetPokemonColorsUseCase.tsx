import {useContext} from 'react';
import {PokeRepoContext, usePokeRepo} from './CleanPokeRepo';

export const useGetPokemonColorUseCase = (repo: PokeRepoContext) => {
  return repo.colors;
};
