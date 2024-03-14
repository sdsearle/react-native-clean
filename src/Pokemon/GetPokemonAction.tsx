import {PokeState} from './PokeState';
import {getPokemonCall} from './PokemonAPI';

export const UPDATE_POKEMON_LIST = {type: 'UPDATE_POKEMON_LIST', payload: []};

export function getPokemonAction(state: PokeState, color: string) {
  console.log('Get Action Running');
  getPokemonCall(color);
}
