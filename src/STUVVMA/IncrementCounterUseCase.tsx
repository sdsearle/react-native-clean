export const incrementCounterUseCase = (state: {count: number}) => {
  return state.count + 1;
};
