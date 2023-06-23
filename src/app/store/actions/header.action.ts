import { createAction, props } from '@ngrx/store';

export const handleCartState = createAction(
  '[Header Component] handleCartState',
  props<{ state: boolean }>()
);

export const handleSearchState = createAction(
  '[Header Component] handleSearchState',
  props<{ state: boolean }>()
);
