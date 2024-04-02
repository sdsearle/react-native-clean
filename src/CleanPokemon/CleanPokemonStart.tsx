import React from 'react';
import {PokeRepoProvider} from './CleanPokeRepo';
import {CleanPokemon} from './CleanPokemon';

export function CleanPokemonStart() {
  return (
    <PokeRepoProvider>
      <CleanPokemon />
    </PokeRepoProvider>
  );
}
