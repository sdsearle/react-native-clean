import {useContext} from 'react';
import {useApiCallForPokemonByColorUseCase} from './ApiCallForPokemonByColorUseCase';
import {PokeRepoContext} from './CleanPokeRepo';
import {useGetPokemonColorUseCase} from './GetPokemonColorsUseCase';
import {useGetPokemonUseCase} from './GetPokemonUseCase';

export const usePokeVM = () => {
  const repo = useContext(PokeRepoContext);
  const colors = useGetPokemonColorUseCase();
  const pokemon = useGetPokemonUseCase();

  const useGetPokemonOfColor = (color: string) => {
    console.log('ZOL ' + Date.now());
    useApiCallForPokemonByColorUseCase(color, repo);
  };

  return {colors, pokemon, useGetPokemonOfColor};
};
