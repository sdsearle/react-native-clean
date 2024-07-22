import {useContext} from 'react';
import {usePokeRepo} from './CleanPokeRepo';

export const useGetPokemonColorUseCase = (repo: usePokeRepo) => {
  return repo.colors;
};
