import {UPDATE_POKEMON_LIST} from './GetPokemonAction';
import {usePokeContext} from './PokeContext';
import {getPokemonCall} from './PokemonAPI';

export const PokeViewModel = () => {
  const {state, dispatch} = usePokeContext();

  const getPokemon = (color: string) => {
    getPokemonCall(color, dispatch);
  };

  return {state, getPokemon};
};
