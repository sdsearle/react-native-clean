import {Colors} from 'react-native/Libraries/NewAppScreen';
import {PokemonColors} from '../Pokemon/PokemonColors';
import {PokemonModel} from '../Pokemon/PokemonModels';
import {Observable, observable} from '@legendapp/state';
import {QueryClient, UseQueryResult, useQuery} from 'react-query';
import {syncedQuery} from '@legendapp/state/sync-plugins/tanstack-query';
import {getPokemon} from '../Pokemon/PokemonAPI';
import {useObservable} from '@legendapp/state/react';

export interface PokeStore {
  colors: typeof PokemonColors;
  currentColor: string;
  setCurrentColor: (color: string) => void;
  query: UseQueryResult;
}

const queryClient = new QueryClient();

export const useGetQuery = (color: string) => {
  const query = useQuery([color], () => getPokemon(color));
  return query;
};

export const store$: Observable<PokeStore> = observable<PokeStore>({
  colors: PokemonColors,
  currentColor: 'black',
  setCurrentColor: color => {
    store$.currentColor.set(color);
  },
  query: () =>
    syncedQuery({
      queryClient,
      query: {
        queryKey: ['pokemon'],
        queryFn: async color => {
          return getPokemon(color);
        },
      },
    }),
});
