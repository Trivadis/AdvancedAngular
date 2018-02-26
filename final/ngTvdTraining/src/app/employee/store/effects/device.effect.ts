import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromRoot from '../../../../app/store';
import * as deviceActions from '../actions/device.action';
import * as fromServices from '../../services';

@Injectable()
export class DeviceEffects {
  constructor(private actions$: Actions, private deviceService: fromServices.DeviceService) {}

  @Effect()
  loadDevices$ = this.actions$.ofType(deviceActions.DeviceActionTypes.LoadDevices).pipe(
    switchMap(() => {
      return this.deviceService
        .getDevices()
        .pipe(
          map(devices => new deviceActions.LoadDeviceSuccess(devices)),
          catchError(error => of(new deviceActions.LoadDeviceFail(error)))
        );
    })
  );
}
