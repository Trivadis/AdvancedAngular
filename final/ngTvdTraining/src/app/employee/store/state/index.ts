
import * as fromEmployee from './employee.state';
import * as fromDevice from './device.state';
import { Employee } from '../../model/employee.model';

export interface State {
    employee: fromEmployee.EmployeeState;
    device: fromDevice.DeviceState;
  }
