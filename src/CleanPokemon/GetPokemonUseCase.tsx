import {useContext} from 'react';
import {useCleanRepo} from '../Clean/CleanRepo';
import {PokeRepoContext, usePokeRepo} from './CleanPokeRepo';
import {PokemonModel} from '../Pokemon/PokemonModels';

export const useGetPokemonUseCase = (repo: PokeRepoContext) => {
  //Example use case of why this useCases can be important.
  const filteredPokemon: PokemonModel[] =
    repo.query.data?.filter(item => {
      return item.name.includes('s');
    }) ?? [];
  const l = repo.query.isLoading;
  //console.log('Filtered ' + JSON.stringify(filteredPokemon));
  return {filteredPokemon, l};
};
