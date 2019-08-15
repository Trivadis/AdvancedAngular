import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import * as fromStore from '../store';

@Injectable()
export class EmployeeGuard implements CanActivate {
  constructor(private store: Store<fromStore.State>) {}

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getEmployeeLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(fromStore.loadEmployees());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
