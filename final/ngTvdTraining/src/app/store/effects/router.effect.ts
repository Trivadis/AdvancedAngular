import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as routerActions from '../actions/router.action';

@Injectable()
export class RouterEffects {
  constructor(private actions$: Actions, private router: Router, private location: Location) {}

  navigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerActions.go),
        tap(({ payload }) => {
          this.router.navigate(payload.path, { queryParams: payload.query, ...payload.extras });
        })
      ),
    { dispatch: false }
  );

  navigateBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerActions.back),
        tap(() => this.location.back())
      ),
    { dispatch: false }
  );

  navigateForward$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerActions.forward),
        tap(() => this.location.forward())
      ),
    { dispatch: false }
  );
}
