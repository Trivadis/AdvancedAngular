import { EmployeeFilterPipe } from './employee-filter.pipe';

import { TestBed, async } from '@angular/core/testing';
import { Employee } from '../model/employee.model';

describe('EmployeeFilterPipe', () => {
  let pipe: EmployeeFilterPipe;
  let employeees: Employee[];

  beforeEach(() => {
    pipe = new EmployeeFilterPipe();
  });
  beforeEach(() => {
    employeees = [
      { firstname: 'Thomas', lastname: 'Gassmann' },
      { firstname: 'Lara', lastname: 'croft' }
    ];
  });

  it('should return all data', () => {
    const result = pipe.transform(employeees, null);
    expect(result.length).toBe(2);
  });
  it('should filter correctly', () => {
    const result = pipe.transform(employeees, 'Thomas');
    expect(result.length).toBe(1);
  });
  it('should filter correctly with capital letters', () => {
    const result = pipe.transform(employeees, 'LARA');
    expect(result.length).toBe(1);
  });
});
