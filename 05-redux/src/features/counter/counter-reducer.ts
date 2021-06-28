import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { added, decremented, incremented } from './counter-actions';

export type CounterState = { count: number };
export const initialState: CounterState = { count: 0 };

export const counterReducer = createReducer(initialState, {
  // action の型定義はanyにせず: PayloadAction<>を定義すること
  // stateの型はinitialSatateから推論してる
  [added.type]: (state, action: PayloadAction<number>) => ({
    ...state,
    count: action.payload,
  }),
  [decremented.type]: (state) => ({ ...state, count: state.count - 1 }),
  [incremented.type]: (state) => ({ ...state, count: state.count + 1 }),
});
