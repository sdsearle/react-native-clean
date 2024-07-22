import {getPokemon} from '../Pokemon/PokemonAPI';
import {PokemonColors} from '../Pokemon/PokemonColors';
import {useQuery} from 'react-query';

export class PokeDataStore {
  static inst: PokeDataStore;
  constructor() {
    if (PokeDataStore.inst) {
      console.log('ZOL CREATE');
      return PokeDataStore.inst;
    }
    PokeDataStore.inst = this;
  }

  public static getInst(): PokeDataStore {
    console.log('checking for inst');
    if (!PokeDataStore.inst) {
      console.log('Creating inst');
      this.inst = new PokeDataStore();
    }
    return this.inst;
  }

  colors = PokemonColors;
  currentColor = 'black';
  query = useQuery([this.currentColor], () => getPokemon(this.currentColor));

  setSelectedColor = (color: string) => {
    console.log(color);
    this.currentColor = color;
    this.query.refetch();
  };
}

const pokeDataStore = new PokeDataStore();

export default pokeDataStore;
