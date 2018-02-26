import { Device } from '../../model/device.model';


export interface DeviceState {
    entities: { [id: number]: Device };
    loaded: boolean;
    loading: boolean;
    selectedDevices: number[];
  }


export const initialState: DeviceState = {
    entities: {},
    loaded: false,
    loading: false,
    selectedDevices: [],
  };
