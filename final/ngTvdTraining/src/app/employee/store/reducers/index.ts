import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromState from '../state';
import * as fromEmployee from './employee.reducer';

export const reducers: ActionReducerMap<fromState.State> = {
  employee: fromEmployee.reducer
};

export const getState = createFeatureSelector<fromState.State>('employees');
