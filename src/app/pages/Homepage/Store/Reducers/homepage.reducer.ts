import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../Actions/homepage.actions'

export const initialState = 0;

const _counterReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
);

export function counterReducer(state = initialState, action: any) {
  return _counterReducer(state, action);
}
