import {useEffect, useState} from 'react';
import {getPokemon} from '../Pokemon/PokemonAPI';
import {PokemonColors} from '../Pokemon/PokemonColors';
import {PokemonModel} from '../Pokemon/PokemonModels';
import React from 'react';
import {useQuery} from 'react-query';

export const usePokeRepo = () => {
  const [colors, setColors] = useState(PokemonColors);
  let currentColor = 'black';
  //const query = useQuery([currentColor], () => getPokemon(currentColor));

  //This was used before react query
  //   useEffect(() => {
  //     const api = getPokemon('black');
  //     api.then(r => setPokemon(r));
  //   }, []);

  //   useEffect(() => {
  //     const data = query.data;

  //     // if (query.isLoading) {
  //     //   return setPokemon([]);
  //     // }
  //     // if (query.isError) {
  //     //   return setPokemon([]);
  //     // }

  //     // if (data === undefined) {
  //     //   return setPokemon([]);
  //     // }

  //     console.log('ZOL ' + Date.now());
  //     //return setPokemon(data);
  //   }, [query.data, query.isLoading, query.isError]);

  const setSelectedColor = (color: string) => {
    //This was used before react query
    //const api = getPokemon(color);
    //api.then(r => setPokemon(r));
    console.log(color);
    currentColor = color;
    //query.refetch();
  };

  return {colors, setSelectedColor};
};

//Avoid using context unless neccessary. Example of this is Global UI see Dialog usecase
// export const PokeRepoContext = React.createContext<
//   ReturnType<typeof usePokeRepo>
// >({} as any);

// export const PokeRepoProvider: React.FC = ({children}) => {
//   const pokeRepo = usePokeRepo();
//   //console.log('PROVIDER ' + JSON.stringify(pokeRepo));

//   return (
//     <PokeRepoContext.Provider value={pokeRepo}>
//       {children}
//     </PokeRepoContext.Provider>
//   );
// };
