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
