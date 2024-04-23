import { Action, createReducer, on } from '@ngrx/store';

import { AuthState } from '../types/auth-state.interface';
import { loginAction } from './actions/login.action';

const initialState: AuthState = {
  isSubmmiting: false,
};

const authReducer = createReducer(
  initialState,
  on(
    loginAction,
    (state): AuthState => ({
      ...state,
      isSubmmiting: true,
    })
  )
);

export function reducer(state: AuthState, action: Action) {
  return authReducer(state, action);
}
