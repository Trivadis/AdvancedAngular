
import * as fromState from '../state/device.state';
import * as fromActions from '../actions/device.action';
import { Device } from '../../model/device.model';

export function reducer(
  state = fromState.initialState,
  action: fromActions.DeviceActions
): fromState.DeviceState {
  switch (action.type) {
    case fromActions.DeviceActionTypes.LoadDevices: {
      return {
        ...state,
        loading: true
      };
    }

    case fromActions.DeviceActionTypes.LoadDevicesSuccess: {
      const devices = action.payload;

      const entities = devices.reduce(
        (d: { [id: number]: Device }, device: Device) => {
          return {
            ...d,
            [device.id]: device
          };
        },
        {
          ...state.entities
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

    case fromActions.DeviceActionTypes.LoadDevicesFail: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
}

export const getDeviceEntities = (state: fromState.DeviceState) => state.entities;
export const getDeviceLoading = (state: fromState.DeviceState) => state.loading;
export const getDeviceLoaded = (state: fromState.DeviceState) => state.loaded;
