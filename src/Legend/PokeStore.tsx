import {Colors} from 'react-native/Libraries/NewAppScreen';
import {PokemonColors} from '../Pokemon/PokemonColors';
import {PokemonModel} from '../Pokemon/PokemonModels';
import {Observable, observable} from '@legendapp/state';
import {QueryClient, UseQueryResult} from 'react-query';
import {syncedQuery} from '@legendapp/state/sync-plugins/tanstack-query';
import {getPokemon} from '../Pokemon/PokemonAPI';
import {useObservable} from '@legendapp/state/react';

export interface PokeStore {
  colors: typeof PokemonColors;
  //Option 1
  // pokemonModels: PokemonModel[] | undefined;
  // isLoading: boolean;
  // isError: boolean;
  //Option 2
  query: UseQueryResult<PokemonModel[]> | undefined;
  //Moved to viewModel
  // currentColor: string;
  // setCurrentColor: (color: string) => void;
  //Moved to customHook
  //query: UseQueryResult;
}

export const store$: Observable<PokeStore> = observable<PokeStore>({
  colors: PokemonColors,
  // Option 2
  query: undefined,
  // Option 1
  // pokemonModels: [],
  // isLoading: true,
  // isError: false,
  // currentColor: 'black',
  // setCurrentColor: color => {
  //   store$.currentColor.set(color);
  // },
  // query: () =>
  //   syncedQuery({
  //     queryClient,
  //     query: {
  //       queryKey: ['pokemon'],
  //       queryFn: async color => {
  //         return getPokemon(color);
  //       },
  //     },
  //   }),
});
