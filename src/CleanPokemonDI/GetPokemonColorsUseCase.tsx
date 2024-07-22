import PokeDataStore from './CleanPokeDataStoreDI';

class GetPokemonColorUseCase {
  invoke() {
    return PokeDataStore.colors;
  }
}

const getPokemonColorUseCase = new GetPokemonColorUseCase();

export default getPokemonColorUseCase;
