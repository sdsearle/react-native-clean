import {useContext} from 'react';
import {PokeRepoContext} from './CleanPokeRepo';

export const useApiCallForPokemonByColorUseCase = (color: string, repo) => {
  repo.useGetPokemonApi(color);
};
