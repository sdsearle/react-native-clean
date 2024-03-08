import {ScarvActions} from './ScarvAction';
import {ScarvIncrementUseCase} from './ScarvIncrementUseCase';

export const scarvReducer = (
  state: ScarvState,
  action: ScarvActions,
): ScarvState => {
  switch (action.type) {
    case 'INCREMENT':
      //   state.count++;
      //   return {...state};
      return ScarvIncrementUseCase(state);
    case 'RESET':
      state.count = 0;
      return {...state};
    default:
      return state;
  }
};
