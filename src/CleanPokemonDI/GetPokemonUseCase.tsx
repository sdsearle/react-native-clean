import PokeDataStore from './CleanPokeDataStoreDI';

class GetPokemonUseCase {
  //filteredPokemon: PokemonModel[] = [];
  //l: boolean = true;

  invoke() {
    console.log('Base Data ' + JSON.stringify(PokeDataStore.query.data));
    const filteredPokemon =
      PokeDataStore.query.data?.filter(item => {
        return item.name.includes('s');
      }) ?? [];
    console.log('ZOL' + JSON.stringify(filteredPokemon));
    const l = PokeDataStore.query.isLoading;
    console.log(l);
    return {
      filteredPokemon,
      l,
    };
  }
}

const getPokemonUseCase = new GetPokemonUseCase();

export default getPokemonUseCase;
