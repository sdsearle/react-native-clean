import {useContext} from 'react';
import {PokeRepoContext} from './CleanPokeRepo';

export const useApiCallForPokemonByColorUseCase = () => {
  const repo = useContext(PokeRepoContext);
  const invoke = repo.useGetPokemonApi;
  return invoke;
};
