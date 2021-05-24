export const CounterActionType = {
  ADD: 'ADD', // 文字型リテラルにしてタイポによるバグを防ぐ
  DECREMENT: 'DECREMENT',
  INCREMENT: 'INCREMENT',
} as const; // アサーション構文（stringにしない）

// オブジェクトから値の型を抽出して共用体型にするための自前ユーティリティ型(4.5 型表現に使われる演算子参照)
type ValueOf<T> = T[keyof T];
export type CounterAction = {
  type: ValueOf<typeof CounterActionType>;
  amount?: number;
};

// action creator（dispatcher に action を発行するときはこれらの関数の戻り値を使う）
export const add = (amount: number): CounterAction => ({
  type: CounterActionType.ADD,
  amount,
});

export const decrement = (): CounterAction => ({
  type: CounterActionType.DECREMENT,
});

export const increment = (): CounterAction => ({
  type: CounterActionType.INCREMENT,
});
