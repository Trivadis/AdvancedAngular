import { State } from './../state/index';
import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../../app/store';
import * as fromFeature from '../reducers';
import * as fromState from '../state';
import * as fromEmployees from '../reducers/employee.reducer';
import { Employee } from '../../model/employee.model';
export const getEmployeeState = createSelector(
  fromFeature.getState,
  (state: fromState.State) => state.employee
);

export const getEmployeeEntities = createSelector(
    getEmployeeState,
    fromEmployees.getEmployeeEntities
);
export const getEmployees = createSelector(getEmployeeEntities, entities => {
  return Object.keys(entities).map(id => entities[+id]);
});

export const getEmployeeLoading = createSelector(
    getEmployeeState,
    fromEmployees.getEmployeeLoading
);

export const getEmployeeLoaded = createSelector(
  getEmployeeState,
  fromEmployees.getEmployeeLoaded
);

export const getSelectedEmployee = createSelector(
getEmployeeEntities,
fromRoot.getRouterState,
  (entities, router): Employee => {
    return router.state && entities[router.state.params.employeeId];
  }
);
