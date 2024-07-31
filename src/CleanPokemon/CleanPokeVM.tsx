import {useContext, useRef, useState} from 'react';
import {useApiCallForPokemonByColorUseCase} from './ApiCallForPokemonByColorUseCase';
import {PokeRepoContext, usePokeRepo} from './CleanPokeRepo';
import {useGetPokemonColorUseCase} from './GetPokemonColorsUseCase';
import {useGetPokemonUseCase} from './GetPokemonUseCase';
import {useCleanRepo} from '../Clean/CleanRepo';

export const usePokeVM = () => {
  const repo = useRef(usePokeRepo());
  const [currentColor, setCurrentColor] = useState('black');

  const colorButtonHandler = (color: string) => {
    console.log('ZOL ' + Date.now());
    setCurrentColor(color);
  };
  const colors = useGetPokemonColorUseCase(repo.current);
  const pokemon = useGetPokemonUseCase(repo.current, currentColor);
  //const setColor = useApiCallForPokemonByColorUseCase(repo);
  //someState usestate //Temp hold some state
  //Async Resources Tan stack Query, AsyncStorage
  //useState for user interactions
  //Context for complex multi views

  return {colors, pokemon, colorButtonHandler};
};
