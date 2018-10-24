import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable ,  of } from 'rxjs';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';

import * as fromStore from '../store';

@Injectable()
export class EmployeeGuard implements CanActivate {
    constructor(private store: Store<fromStore.State>) { }

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
              this.store.dispatch(new fromStore.LoadEmployees());
            }
          }),
          filter(loaded => loaded),
          take(1)
        );
      }
}
