import {useContext} from 'react';
import {useCleanRepo} from '../Clean/CleanRepo';
import {PokeRepoContext, usePokeRepo} from './CleanPokeRepo';
import {PokemonModel} from '../Pokemon/PokemonModels';
import {useQuery} from 'react-query';
import {getPokemon} from '../Pokemon/PokemonAPI';

export const useGetPokemonUseCase = (repo: PokeRepoContext, color: string) => {
  //Example use case of why this useCases can be important.
  const query = useQuery([color], () => getPokemon(color));
  const filteredPokemon: PokemonModel[] =
    query.data?.filter(item => {
      return item.name.includes('s');
    }) ?? [];
  const l = query.isLoading;
  //console.log('Filtered ' + JSON.stringify(filteredPokemon));
  return {filteredPokemon, l};
};
