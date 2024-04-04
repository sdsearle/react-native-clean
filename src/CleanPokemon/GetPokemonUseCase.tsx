import {useContext} from 'react';
import {useCleanRepo} from '../Clean/CleanRepo';
import {PokeRepoContext, usePokeRepo} from './CleanPokeRepo';

export const useGetPokemonUseCase = () => {
  //Example use case of why this useCases can be important.
  const repo = useContext(PokeRepoContext);
  const filteredPokemon = repo.pokemon.filter(item => {
    return item.name.includes('s');
  });
  //console.log('Filtered ' + JSON.stringify(filteredPokemon));
  return filteredPokemon;
};
