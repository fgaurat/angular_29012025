import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, incBy } from './counter.actions';


export interface CounterState{
  counterValue:number
}
export const initialState:CounterState = {counterValue:0};

export const counterReducer = createReducer< CounterState>(
  initialState,
  on(increment, (state) =>  ({...state,counterValue:state.counterValue +1}) ),
//   on(decrement, (state) => state - 1),
//   on(incBy, (state,action) => state + action.theValue),
//   on(reset, (state) => 0)
);
