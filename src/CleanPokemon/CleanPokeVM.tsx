import {useContext} from 'react';
import {useApiCallForPokemonByColorUseCase} from './ApiCallForPokemonByColorUseCase';
import {PokeRepoContext} from './CleanPokeRepo';
import {useGetPokemonColorUseCase} from './GetPokemonColorsUseCase';
import {useGetPokemonUseCase} from './GetPokemonUseCase';

export const usePokeVM = () => {
  const colors = useGetPokemonColorUseCase();
  const pokemon = useGetPokemonUseCase();
  const apiCall = useApiCallForPokemonByColorUseCase();

  const useGetPokemonOfColor = (color: string) => {
    console.log('ZOL ' + Date.now());
    apiCall(color);
  };

  return {colors, pokemon, useGetPokemonOfColor};
};
