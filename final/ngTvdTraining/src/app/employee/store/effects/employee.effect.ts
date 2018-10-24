import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromRoot from '../../../../app/store';
import * as employeeActions from '../actions/employee.action';
import * as fromServices from '../../services';

@Injectable()
export class EmployeeEffects {
  constructor(private actions$: Actions, private employeeService: fromServices.EmployeeService) {}

  @Effect()
  loadEmployees$ = this.actions$.ofType(employeeActions.EmployeeActionTypes.LoadEmployees).pipe(
    switchMap(() => {
      return this.employeeService
        .getEmployees()
        .pipe(
          map(employees => new employeeActions.LoadEmployeeSuccess(employees)),
          catchError(error => of(new employeeActions.LoadEmployeeFail(error)))
        );
    })
  );

  @Effect()
  createEmployee$ = this.actions$.ofType(employeeActions.EmployeeActionTypes.CreateEmployee).pipe(
    map((action: employeeActions.CreateEmployee) => action.payload),
    switchMap(employee => {
      return this.employeeService
        .createEmployee(employee)
        .pipe(
          map(newEmpl => new employeeActions.CreateEmployeeSuccess(newEmpl)),
          catchError(error => of(new employeeActions.CreateEmployeeFail(error)))
        );
    })
  );

  @Effect()
  updateEmployee$ = this.actions$.ofType(employeeActions.EmployeeActionTypes.UpdateEmployee).pipe(
    map((action: employeeActions.UpdateEmployee) => action.payload),
    switchMap(employee => {
      return this.employeeService.updateEmployee(employee).pipe(
        map(newEmpl => new employeeActions.UpdateEmployeeSuccess(newEmpl)),
        catchError(error => {
          console.log(error);
          return of(new employeeActions.UpdateEmployeeFail(error));
        })
      );
    })
  );

  @Effect()
  removeEmployee$ = this.actions$.ofType(employeeActions.EmployeeActionTypes.RemoveEmployee).pipe(
    map((action: employeeActions.RemoveEmployee) => action.payload),
    switchMap(employee => {
      return this.employeeService.removeEmployee(employee).pipe(
        map(() => new employeeActions.RemoveEmployeeSuccess(employee)),
        catchError(error => {
          console.log(error);
          return of(new employeeActions.RemoveEmployeeFail(error));
        })
      );
    })
  );

  @Effect()
  handleEmployeeSuccess$ = this.actions$
    .ofType(
      employeeActions.EmployeeActionTypes.CreateEmployeeSuccess,
      employeeActions.EmployeeActionTypes.UpdateEmployeeSuccess,
      employeeActions.EmployeeActionTypes.RemoveEmployeeSuccess
    )
    .pipe(
      map(employee => {
        return new fromRoot.Go({
          path: ['/employees'],
          extras: { queryParamsHandling: 'preserve' }
        });
      })
    );
}
