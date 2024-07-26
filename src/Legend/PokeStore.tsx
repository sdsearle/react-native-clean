import {Colors} from 'react-native/Libraries/NewAppScreen';
import {PokemonColors} from '../Pokemon/PokemonColors';
import {PokemonModel} from '../Pokemon/PokemonModels';
import {observable} from '@legendapp/state';
import {QueryClient} from 'react-query';
import {syncedQuery} from '@legendapp/state/sync-plugins/tanstack-query';
import {getPokemon} from '../Pokemon/PokemonAPI';
import {useObservable} from '@legendapp/state/react';

interface Store {
  colors: typeof PokemonColors;
  currentColor: string;
  setCurrentColor: (color: string) => void;
}

export const store$ = observable<Store>({
  colors: PokemonColors,
  currentColor: 'black',
  setCurrentColor: color => {
    store$.currentColor.set(color);
  },
});

const queryClient = new QueryClient();

export const apiStore = observable(
  syncedQuery({
    queryClient,
    query: {
      queryKey: [store$.currentColor],
      queryFn: async () => {
        return getPokemon(store$.currentColor.get());
      },
    },
  }),
);
