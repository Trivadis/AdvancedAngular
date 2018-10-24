import { EmployeeService } from './employee.service';
import { DeviceService } from './device.service';

export const services: any[] = [EmployeeService, DeviceService];

export * from './employee.service';
export * from './device.service';
