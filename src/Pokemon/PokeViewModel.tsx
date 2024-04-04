import {UPDATE_POKEMON_LIST} from './GetPokemonAction';
import {usePokeContext} from './PokeContext';
import {getPokemonCall} from './PokemonAPI';

export const PokeViewModel = () => {
  const {state, dispatch} = usePokeContext();

  const getPokemon = (color: string) => {
    console.log(Date.now());
    getPokemonCall(color, dispatch);
  };

  return {state, getPokemon};
};
