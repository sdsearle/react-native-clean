import {useContext} from 'react';
import {useApiCallForPokemonByColorUseCase} from './ApiCallForPokemonByColorUseCase';
import {PokeRepoContext, usePokeRepo} from './CleanPokeRepo';
import {useGetPokemonColorUseCase} from './GetPokemonColorsUseCase';
import {useGetPokemonUseCase} from './GetPokemonUseCase';
import {useCleanRepo} from '../Clean/CleanRepo';

export const usePokeVM = () => {
  const repo = usePokeRepo();
  const colors = useGetPokemonColorUseCase(repo);
  const pokemon = useGetPokemonUseCase(repo);
  const setColor = useApiCallForPokemonByColorUseCase(repo);
  //someState usestate //Temp hold some state
  //Async Resources Tan stack Query, AsyncStorage
  //useState for user interactions
  //Context for complex multi views

  const useGetPokemonOfColor = (color: string) => {
    console.log('ZOL ' + Date.now());
    setColor(color);
  };

  return {colors, pokemon, useGetPokemonOfColor};
};
