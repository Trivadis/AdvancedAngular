import { Employee } from './../model/employee.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, delay, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';

@Injectable()
export class EmployeeService {

    constructor(private http: HttpClient) { }

    getEmployees(): Observable<Employee[]> {
        return this.http
          .get<Employee[]>(`${environment.apiBaseUrl}/employees`)
          .pipe(catchError((error: any) => _throw(error)));
      }


    getEmployee(id: number): Observable<Employee> {
      return this.http
        .get<Employee>(`${environment.apiBaseUrl}/employees/${id}`)
        .pipe(catchError((error: any) => _throw(error)));
    }

      createEmployee(payload: Employee): Observable<Employee> {
        return this.http
          .post<Employee>(`${environment.apiBaseUrl}/employees`, payload)
          .pipe(catchError((error: any) => _throw(error)));
      }

      updateEmployee(payload: Employee): Observable<Employee> {
        return this.http
          .put<Employee>(`${environment.apiBaseUrl}/employees/${payload.id}`, payload)
          .pipe(catchError((error: any) => _throw(error)));
      }

      removeEmployee(payload: Employee): Observable<any> {
        return this.http
          .delete<any>(`${environment.apiBaseUrl}/employees/${payload.id}`)
          .pipe(catchError((error: any) => _throw(error)));
      }

      checkEmailUnique(email: string) {
            // service call for example
        return of(email).pipe(
          delay(1000),
          map((e) => e !== 'info@trivadis.com')
        );
      }
}
