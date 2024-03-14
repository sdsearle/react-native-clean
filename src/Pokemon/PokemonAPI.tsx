import {UPDATE_POKEMON_LIST} from './GetPokemonAction';
import {PokemonModel} from './PokemonModels';

export const getPokemonCall = async (color: string, dispatch) => {
  console.log('Getting Pokemon');
  fetch('https://pokeapi.co/api/v2/pokemon-color/' + color)
    .then(response => response.json())
    .then(json => {
      const t = UPDATE_POKEMON_LIST.type;
      dispatch({type: t, payload: json.pokemon_species});
    })
    .catch(error => {
      console.error(error);
    });
};
