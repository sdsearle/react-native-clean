import {useEffect, useState} from 'react';
import {getPokemon} from '../Pokemon/PokemonAPI';
import {PokemonColors} from '../Pokemon/PokemonColors';
import {PokemonModel} from '../Pokemon/PokemonModels';
import React from 'react';
import {useQuery} from 'react-query';

export const usePokeRepo = () => {
  const [colors, setColors] = useState(PokemonColors);
  const [pokemon, setPokemon] = useState<PokemonModel[]>([]);
  const [currentColor, setCurrentColor] = useState('black');
  const query = useQuery([currentColor], () => getPokemon(currentColor));

  //This was used before react query
  //   useEffect(() => {
  //     const api = getPokemon('black');
  //     api.then(r => setPokemon(r));
  //   }, []);

  useEffect(() => {
    const data = query.data;

    if (query.isLoading) {
      return setPokemon([]);
    }
    if (query.isError) {
      return setPokemon([]);
    }

    if (data === undefined) {
      return setPokemon([]);
    }

    console.log('ZOL ' + Date.now());
    return setPokemon(data);
  }, [query.data, query.isLoading, query.isError]);

  const useGetPokemonApi = (color: string) => {
    //This was used before react query
    //const api = getPokemon(color);
    //api.then(r => setPokemon(r));
    setCurrentColor(color);
  };

  return {colors, pokemon, useGetPokemonApi};
};

export const PokeRepoContext = React.createContext<
  ReturnType<typeof usePokeRepo>
>({} as any);

export const PokeRepoProvider: React.FC = ({children}) => {
  const pokeRepo = usePokeRepo();
  //console.log('PROVIDER ' + JSON.stringify(pokeRepo));

  return (
    <PokeRepoContext.Provider value={pokeRepo}>
      {children}
    </PokeRepoContext.Provider>
  );
};
