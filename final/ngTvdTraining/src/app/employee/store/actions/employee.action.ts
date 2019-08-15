import { createAction, props } from '@ngrx/store';
import { Employee } from '../../model/employee.model';

export const loadEmployees = createAction('[Employees] Load Employee');

export const loadEmployeeSuccess = createAction(
  '[Employees] Load Employee Sucess',
  props<{ employees: Employee[] }>()
);

export const loadEmployeeFail = createAction(
  '[Employees] Load Employee Fail',
  props<{ error: any }>()
);

// create actions
export const createEmployee = createAction(
  '[Employees] Create Employee',
  props<{ employee: Employee }>()
);
export const createEmployeeSuccess = createAction(
  '[Employees] Create Employee Sucess',
  props<{ employee: Employee }>()
);
export const createEmployeeFail = createAction(
  '[Employees] Create Employee Fail',
  props<{ error: any }>()
);

// update actions
export const updateEmployee = createAction(
  '[Employees] Update Employee',
  props<{ employee: Employee }>()
);
export const updateEmployeeSuccess = createAction(
  '[Employees] Update Employee Sucess',
  props<{ employee: Employee }>()
);
export const updateEmployeeFail = createAction(
  '[Employees] Update Employee Fail',
  props<{ error: any }>()
);

// remove actions
export const removeEmployee = createAction(
  '[Employees] Remove Employee',
  props<{ employee: Employee }>()
);
export const removeEmployeeSuccess = createAction(
  '[Employees] Remove Employee Sucess',
  props<{ employee: Employee }>()
);
export const removeEmployeeFail = createAction(
  '[Employees] Remove Employee Fail',
  props<{ error: any }>()
);
