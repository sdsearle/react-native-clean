import {useContext} from 'react';

export const useApiCallForPokemonByColorUseCase = repo => {
  const invoke = repo.setSelectedColor;
  return invoke;
};
