import { createSelector } from '@ngrx/store';
import * as fromRoot from '../../../../app/store';
import { Employee } from '../../model/employee.model';
import * as fromFeature from '../reducers';
import * as fromState from '../state';
import * as fromEmployeeState from '../state/employee.state';

export const getEmployeeState = createSelector(
  fromFeature.getState,
  (state: fromState.State) => state.employee
);

export const getEmployeeEntities = createSelector(
  getEmployeeState,
  fromEmployeeState.getEmployeeEntities
);
export const getEmployees = createSelector(
  getEmployeeEntities,
  entities => {
    // return Object.keys(entities).map(id => entities[+id]);
    return Object.values(entities);
  }
);

export const getEmployeeLoading = createSelector(
  getEmployeeState,
  fromEmployeeState.getEmployeeLoading
);

export const getEmployeeLoaded = createSelector(
  getEmployeeState,
  fromEmployeeState.getEmployeeLoaded
);

export const getSelectedEmployee = createSelector(
  getEmployeeEntities,
  fromRoot.getRouterState,
  (entities, router): Employee => {
    return router.state && entities[router.state.params.employeeId];
  }
);
