import {useQuery} from 'react-query';
import {getPokemon} from '../Pokemon/PokemonAPI';
import {store$} from './PokeStore';

export const useCaseGetPokemonByColor = (color: string) => {
  const query = useQuery([color], () => getPokemon(color));
  console.log('RESETING QUERY');
  store$.query.set(query);
  //   Option 1
  //   store$.pokemonModels.set(query.data);
  //   store$.isError.set(query.isError);
  //   store$.isLoading.set(query.isLoading);
};
