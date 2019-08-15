import { createReducer, on } from '@ngrx/store';
import { Employee } from '../../model/employee.model';
import * as fromActions from '../actions/employee.action';
import * as fromState from '../state/employee.state';

export const reducer = createReducer(
  fromState.initialState,
  on(fromActions.loadEmployees, state => ({
    ...state,
    loading: true
  })),
  on(fromActions.loadEmployeeSuccess, (state, { employees }) => {
    const entities = employees.reduce(
      (e: { [id: number]: Employee }, employee: Employee) => {
        return {
          ...e,
          [employee.id]: employee
        };
      },
      {
        ...state.entities
      }
    );

    return {
      ...state,
      loading: false,
      loaded: true,
      entities
    };
  }),
  on(fromActions.loadEmployeeFail, (state, { error }) => {
    return {
      ...state,
      loading: false,
      loaded: false
    };
  }),
  on(
    fromActions.createEmployeeSuccess,
    fromActions.updateEmployeeSuccess,
    (state, { employee }) => {
      const entities = {
        ...state.entities,
        [employee.id]: employee
      };

      return {
        ...state,
        entities
      };
    }
  ),
  on(fromActions.removeEmployeeSuccess, (state, { employee }) => {
    const { [employee.id]: removed, ...entities } = state.entities;

    return {
      ...state,
      entities
    };
  })
);
