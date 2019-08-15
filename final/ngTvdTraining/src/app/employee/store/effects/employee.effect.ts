import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromRoot from '../../../../app/store';
import * as fromServices from '../../services';
import * as employeeActions from '../actions/employee.action';

@Injectable()
export class EmployeeEffects {
  constructor(private actions$: Actions, private employeeService: fromServices.EmployeeService) {}

  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employeeActions.loadEmployees),
      switchMap(() => {
        return this.employeeService.getEmployees().pipe(
          map(employees => employeeActions.loadEmployeeSuccess({ employees })),
          catchError(error => of(employeeActions.loadEmployeeFail({ error })))
        );
      })
    )
  );

  createEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employeeActions.createEmployee),
      switchMap(({ employee }) => {
        return this.employeeService.createEmployee(employee).pipe(
          map(newEmpl => employeeActions.createEmployeeSuccess({ employee: newEmpl })),
          catchError(error => of(employeeActions.createEmployeeFail({ error })))
        );
      })
    )
  );

  updateEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employeeActions.updateEmployee),
      switchMap(({ employee }) => {
        return this.employeeService.updateEmployee(employee).pipe(
          map(newEmpl => employeeActions.updateEmployeeSuccess({ employee: newEmpl })),
          catchError(error => {
            console.log(error);
            return of(employeeActions.updateEmployeeFail({ error }));
          })
        );
      })
    )
  );

  removeEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employeeActions.removeEmployee),
      switchMap(({ employee }) => {
        return this.employeeService.removeEmployee(employee).pipe(
          map(() => employeeActions.removeEmployeeSuccess({ employee })),
          catchError(error => {
            console.log(error);
            return of(employeeActions.removeEmployeeFail(error));
          })
        );
      })
    )
  );

  handleEmployeeSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        employeeActions.createEmployeeSuccess,
        employeeActions.updateEmployeeSuccess,
        employeeActions.removeEmployeeSuccess
      ),
      map(({ employee }) => {
        return fromRoot.go({
          payload: {
            path: ['/employees'],
            extras: { queryParamsHandling: 'preserve' }
          }
        });
      })
    )
  );
}
