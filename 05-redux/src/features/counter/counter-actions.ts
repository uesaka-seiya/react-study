import { createAction } from '@reduxjs/toolkit';

const FEATURE = 'counter';
// FSA の payload に相当するものの型を createAction の型引数として渡す
export const added = createAction<number>(`${FEATURE}/added`);
export const decremented = createAction<number>(`${FEATURE}/decremented`);
export const incremented = createAction<number>(`${FEATURE}/incremented`);
