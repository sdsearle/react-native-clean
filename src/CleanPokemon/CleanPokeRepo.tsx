import {useEffect, useState} from 'react';
import {getPokemon} from '../Pokemon/PokemonAPI';
import {PokemonColors} from '../Pokemon/PokemonColors';
import {PokemonModel} from '../Pokemon/PokemonModels';
import React from 'react';

export const usePokeRepo = () => {
  const [colors, setColors] = useState(PokemonColors);
  const [pokemon, setPokemon] = useState<PokemonModel[]>([]);

  useEffect(() => {
    const api = getPokemon('black');
    api.then(r => setPokemon(r));
  }, []);

  const getPokemonApi = (color: string) => {
    const api = getPokemon(color);
    api.then(r => setPokemon(r));
  };

  return {colors, pokemon, getPokemonApi};
};

export const PokeRepoContext = React.createContext<
  ReturnType<typeof usePokeRepo>
>({} as any);

export const PokeRepoProvider: React.FC = ({children}) => {
  const pokeRepo = usePokeRepo();
  console.log('PROVIDER ' + JSON.stringify(pokeRepo));

  return (
    <PokeRepoContext.Provider value={pokeRepo}>
      {children}
    </PokeRepoContext.Provider>
  );
};
