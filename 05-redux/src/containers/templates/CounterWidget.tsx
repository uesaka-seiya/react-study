import { VFC, useReducer } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CounterWidget from 'components/templates/CounterWidget';

type CounterState = { count: number };
const initialState: CounterState = { count: 0 }; // dummy

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    added: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count + action.payload,
    }),
    decrement: (state) => ({ ...state, count: state.count - 1 }),
    increment: (state) => ({ ...state, count: state.count + 1 }),
  },
});

const EnhancedCounterWidget: VFC<{ initialCount?: number }> = ({
  initialCount = 0,
}) => {
  const [state, dispatch] = useReducer(
    counterSlice.reducer,
    initialCount,
    (count: number): CounterState => ({ count }),
  );
  const { added, decrement, increment } = counterSlice.actions;

  return (
    <CounterWidget
      count={state.count}
      add={(amount: number) => dispatch(added(amount))}
      decrement={() => dispatch(decrement())}
      increment={() => dispatch(increment())}
    />
  );
};

export default EnhancedCounterWidget;
