import React from 'react';
import {ScarvView} from './ScarvView';
import {ScarvProvider} from './ScarvProvider';

export function SCARV({navigation}) {
  return (
    <ScarvProvider>
      <ScarvView navigation={navigation} />
    </ScarvProvider>
  );
}
