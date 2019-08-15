import { Employee } from '../../model/employee.model';

export interface EmployeeState {
  entities: { [id: number]: Employee };
  loading: boolean;
  loaded: boolean;
}

export const initialState: EmployeeState = {
  entities: {},
  loading: false,
  loaded: false
};

export const getEmployeeEntities = (state: EmployeeState) => state.entities;
export const getEmployeeLoading = (state: EmployeeState) => state.loading;
export const getEmployeeLoaded = (state: EmployeeState) => state.loaded;
