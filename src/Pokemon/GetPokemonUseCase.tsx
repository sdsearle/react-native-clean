import {PokeState} from './PokeState';
import {getPokemon} from './PokemonAPI';

export async function GetPokemonUseCase(state: PokeState, color: string) {
  const response = await getPokemon(color);
  try {
    state = response.json.pokemon_species;
  } catch (error) {
    console.log('ERROR Failed to get Pokemon');
  }

  return {...state};
}
