import GetPokemonColorUseCase from './GetPokemonColorsUseCase';
import ApiCallForPokemonByColorUseCase from './ApiCallForPokemonByColorUseCase';
import {PokemonModel} from '../Pokemon/PokemonModels';

export const usePokeVM = () => {
  const colors = GetPokemonColorUseCase.invoke();
  let l: boolean;
  let data: PokemonModel[];
  //PokeDataStore.inst.query; //GetPokemonUseCase.invoke;
  const setColor = ApiCallForPokemonByColorUseCase.invoke;

  const useGetPokemonOfColor = (color: string) => {
    console.log('ZOL ' + Date.now());
    setColor(color);
  };

  return {colors, pokemon, useGetPokemonOfColor};
};
