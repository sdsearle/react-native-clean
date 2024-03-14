import React from 'react';
import {PokeListView} from './PokeListView';
import {PokeProvider} from './PokeProvider';

export function Pokemon({navigation}) {
  return (
    <PokeProvider>
      <PokeListView navigation={navigation} />
    </PokeProvider>
  );
}
