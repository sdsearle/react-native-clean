import {UPDATE_POKEMON_LIST, getPokemonAction} from './GetPokemonAction';
import {PokeActions} from './PokeActions';
import {PokeState} from './PokeState';

export const pokeReducer = (
  state: PokeState,
  action: PokeActions,
): PokeState => {
  console.log(JSON.stringify(action.type));

  switch (action.type) {
    case UPDATE_POKEMON_LIST.type:
      state.pokemon = action.payload;
      console.log('ZOL ' + Date.now());
      return {...state};
    default:
      console.log('DEFAULTED');
      return state;
  }
};
