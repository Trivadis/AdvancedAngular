import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

// import * as fromState from '../state/employee.state';
  import * as fromState from '../state';
import * as fromEmployee from './employee.reducer';
import * as fromDevice from './device.reducer';

export const reducers: ActionReducerMap<fromState.State> = {
  employee: fromEmployee.reducer,
  device: fromDevice.reducer
};

export const getState = createFeatureSelector<fromState.State>(
  'employees'
);
