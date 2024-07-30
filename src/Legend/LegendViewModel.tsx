import {useState} from 'react';
import {PokeStore, store$, useGetQuery} from './PokeStore';

export const useLegendViewModel = () => {
  const [currentColor, setCurrentColor] = useState('black');
  const pokeStore: PokeStore = store$.get();
  const query = useGetQuery(currentColor);
  const pokeColors = pokeStore.colors;
  const colorButtonHandler = (color: string) => {
    console.log(color);
    setCurrentColor(color);
  };

  return {query, pokeColors, currentColor, colorButtonHandler};
};
