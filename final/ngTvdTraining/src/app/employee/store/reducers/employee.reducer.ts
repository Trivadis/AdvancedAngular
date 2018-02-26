
import * as fromState from '../state/employee.state';
import * as fromActions from '../actions/employee.action';
import { Employee } from '../../model/employee.model';

export function reducer(
  state = fromState.initialState,
  action: fromActions.EmployeeActions
): fromState.EmployeeState {

  switch (action.type) {
    case fromActions.EmployeeActionTypes.LoadEmployees: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromActions.EmployeeActionTypes.LoadEmployeeSuccess: {
      const employees = action.payload;

      const entities = employees.reduce(
        (e: { [id: number]: Employee }, employee: Employee) => {
          return {
            ...e,
            [employee.id]: employee,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    case fromActions.EmployeeActionTypes.LoadEmployeeFail: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }


    case fromActions.EmployeeActionTypes.CreateEmployeeSuccess:
    case fromActions.EmployeeActionTypes.UpdateEmployeeSuccess: {
      const employee = action.payload;

      const entities = {
        ...state.entities,
        [employee.id]: employee,
      };

      return {
        ...state,
        entities,
      };
    }


    case fromActions.EmployeeActionTypes.RemoveEmployeeSuccess: {
      const employee = action.payload;
      const { [employee.id]: removed, ...entities } = state.entities;

      return {
        ...state,
        entities,
      };
    }
  }

  return state;
}

export const getEmployeeEntities = (state: fromState.EmployeeState) => state.entities;
export const getEmployeeLoading = (state: fromState.EmployeeState) => state.loading;
export const getEmployeeLoaded = (state: fromState.EmployeeState) => state.loaded;
