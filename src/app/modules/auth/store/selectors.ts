import { createSelector } from '@ngrx/store';
import { AppState } from '../../shared/types/app-state.interface';
import { AuthState } from '../types/auth-state.interface';

export const authFeatureSelector = (state: AppState): AuthState => state.auth;

export const isSubmmitingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthState) => authState.isSubmmiting
);
