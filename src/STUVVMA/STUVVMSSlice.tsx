import {createSlice} from '@reduxjs/toolkit';
import StuvvmsStore from './STUVVMSStore';
import {incrementCounterUseCase} from './IncrementCounterUseCase';

const initialState = StuvvmsStore;

export const stuvvmsSlice = createSlice({
  name: 'counter', //Note: This is important for the index file regaurding its reducer
  initialState,
  reducers: {
    increment: state => {
      state.count = incrementCounterUseCase(state);
    },
  },
});

const {increment} = stuvvmsSlice.actions;

export const StuvvmsActions = {
  increment,
};

export default stuvvmsSlice.reducer;
