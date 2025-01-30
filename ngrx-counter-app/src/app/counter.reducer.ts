import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, incBy } from './counter.actions';

export const initialState = {counterValue:0,showToast:false};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) =>  ({...state,counterValue:state.counterValue +1}) ),
//   on(decrement, (state) => state - 1),
//   on(incBy, (state,action) => state + action.theValue),
//   on(reset, (state) => 0)
);
