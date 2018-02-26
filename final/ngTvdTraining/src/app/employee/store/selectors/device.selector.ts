import { State } from './../state/index';
import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../../app/store';
import * as fromFeature from '../reducers';
import * as fromState from '../state';
import * as fromDevices from '../reducers/device.reducer';

export const getDeviceState = createSelector(
  fromFeature.getState,
  (state: fromState.State) => state.device
);

export const getDeviceEntities = createSelector(
    getDeviceState,
    fromDevices.getDeviceEntities
);
export const getDevices = createSelector(getDeviceState, entities => {
  return Object.keys(entities).map(id => entities[+id]);
});

export const getDeviceLoading = createSelector(
    getDeviceState,
    fromDevices.getDeviceLoading
);

export const getDeviceLoaded = createSelector(
    getDeviceState,
    fromDevices.getDeviceLoaded
);

