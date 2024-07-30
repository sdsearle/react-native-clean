import {useState} from 'react';
import {PokeStore, store$} from './PokeStore';
import {useCaseGetPokemonByColor} from './useGetPokemonQueryUseCase';

export const useLegendViewModel = () => {
  const [currentColor, setCurrentColor] = useState('black');
  const pokeStore: PokeStore = store$.get();
  useCaseGetPokemonByColor(currentColor);
  const pokeColors = pokeStore.colors;
  const colorButtonHandler = (color: string) => {
    console.log(color);
    setCurrentColor(color);
  };

  //Option 2
  const query = pokeStore.query;

  return {query, pokeColors, currentColor, colorButtonHandler};
};
