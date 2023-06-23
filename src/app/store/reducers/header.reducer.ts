import { createReducer, on } from '@ngrx/store';
import { handleCartState, handleSearchState } from '../actions/header.action';

export const initialState = {
  isCartOpen: false,
  isSearchOpen: false,
};

export const headerReducer = createReducer(
  initialState,
  on(handleCartState, (state, action) => ({
    ...state,
    isCartOpen: action.state,
  })),
  on(handleSearchState, (state, action) => ({
    ...state,
    isSearchOpen: action.state,
  }))
);
