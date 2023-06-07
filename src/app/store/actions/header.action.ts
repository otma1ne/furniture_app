import { createAction, props } from '@ngrx/store';

export const handleCartState = createAction(
  '[Header Component] handleCartState',
  props<{ state: boolean }>()
);
