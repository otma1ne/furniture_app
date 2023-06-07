import { createReducer, on } from '@ngrx/store';
import { handleCartState } from '../actions/header.action';

export const initialState = {
  isCartOpen: false,
};

export const headerReducer = createReducer(
  initialState,
  on(handleCartState, (state, action) => ({
    ...state,
    isCartOpen: action.state,
  }))
);
