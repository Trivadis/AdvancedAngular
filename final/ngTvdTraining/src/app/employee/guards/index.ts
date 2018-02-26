import { EmployeeEditGuard } from './employee-edit.guard';
import { EmployeeGuard } from './employee.guard';

export const guards: any[] = [EmployeeEditGuard, EmployeeGuard];

export * from './employee-edit.guard';
export * from './employee.guard';
