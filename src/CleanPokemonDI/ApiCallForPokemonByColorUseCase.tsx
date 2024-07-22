import PokeDataStore from './CleanPokeDataStoreDI';

class ApiCallForPokemonByColorUseCase {
  invoke = (color: string) => {
    return PokeDataStore.setSelectedColor(color);
  };
}

const apiCallForPokemonByColorUseCase = new ApiCallForPokemonByColorUseCase();

export default apiCallForPokemonByColorUseCase;
