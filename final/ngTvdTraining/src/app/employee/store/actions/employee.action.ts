import { Action } from '@ngrx/store';
import { Employee } from '../../model/employee.model';


export enum EmployeeActionTypes {
    LoadEmployees = '[Employees] Load Employee',
    LoadEmployeeSuccess = '[Employees] Load Employee Sucess',
    LoadEmployeeFail = '[Employees] Load Employee Fail',
    CreateEmployee = '[Employees] Create Employee',
    CreateEmployeeSuccess = '[Employees] Create Employee Sucess',
    CreateEmployeeFail = '[Employees] Create Employee Fail',
    UpdateEmployee = '[Employees] Update Employee',
    UpdateEmployeeSuccess = '[Employees] Update Employee Sucess',
    UpdateEmployeeFail = '[Employees] Update Employee Fail',
    RemoveEmployee = '[Employees] Remove Employee',
    RemoveEmployeeSuccess = '[Employees] Remove Employee Sucess',
    RemoveEmployeeFail = '[Employees] Remove Employee Fail'
}

export class LoadEmployees implements Action {
  readonly type = EmployeeActionTypes.LoadEmployees;
}

export class LoadEmployeeSuccess implements Action {
  readonly type = EmployeeActionTypes.LoadEmployeeSuccess;
  constructor(public payload: Employee[]) {}
}

export class LoadEmployeeFail implements Action {
  readonly type = EmployeeActionTypes.LoadEmployeeFail;
  constructor(public payload: any) {}
}

// create actions
export class CreateEmployee implements Action {
  readonly type = EmployeeActionTypes.CreateEmployee;
  constructor(public payload: Employee) {}
}
export class CreateEmployeeSuccess implements Action {
  readonly type = EmployeeActionTypes.CreateEmployeeSuccess;
  constructor(public payload: Employee) {}
}
export class CreateEmployeeFail implements Action {
  readonly type = EmployeeActionTypes.CreateEmployeeFail;
  constructor(public payload: any) {}
}

// update actions
export class UpdateEmployee implements Action {
  readonly type = EmployeeActionTypes.UpdateEmployee;
  constructor(public payload: Employee) {}
}
export class UpdateEmployeeSuccess implements Action {
  readonly type = EmployeeActionTypes.UpdateEmployeeSuccess;
  constructor(public payload: Employee) {}
}
export class UpdateEmployeeFail implements Action {
  readonly type = EmployeeActionTypes.UpdateEmployeeFail;
  constructor(public payload: any) {}
}

// remove actions
export class RemoveEmployee implements Action {
  readonly type = EmployeeActionTypes.RemoveEmployee;
  constructor(public payload: Employee) {}
}
export class RemoveEmployeeSuccess implements Action {
  readonly type = EmployeeActionTypes.RemoveEmployeeSuccess;
  constructor(public payload: Employee) {}
}
export class RemoveEmployeeFail implements Action {
  readonly type = EmployeeActionTypes.RemoveEmployeeFail;
  constructor(public payload: any) {}
}

// action types
export type EmployeeActions =
  | LoadEmployees
  | LoadEmployeeSuccess
  | LoadEmployeeFail
  | CreateEmployee
  | CreateEmployeeSuccess
  | CreateEmployeeFail
  | UpdateEmployee
  | UpdateEmployeeSuccess
  | UpdateEmployeeFail
  | RemoveEmployee
  | RemoveEmployeeSuccess
  | RemoveEmployeeFail
  ;
