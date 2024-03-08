export function ScarvIncrementUseCase(state: ScarvState) {
  state.count++;
  return {...state};
}
