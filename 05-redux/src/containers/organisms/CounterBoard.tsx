import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { added, decremented, incremented } from 'features/counter/counter-actions';
import { CounterState } from 'features/counter/counter-reducer';
import CounterBoard from 'components/organisms/CounterBoard';

const EnhancedCounterBoard: FC = () => {
  // stateを受け取り、そこから必要な値(count)を抜き出すための関数(state) => state.countを引数にとる
  const count = useSelector<CounterState, number>((state) => state.count);
  const dispatch = useDispatch();

  return (
    <CounterBoard
      count={count}
      add={(amount: number) => dispatch(added(amount))}
      decrement={() => dispatch(decremented(1))}
      increment={() => dispatch(incremented(1))}
    />
  );
};

export default EnhancedCounterBoard;
