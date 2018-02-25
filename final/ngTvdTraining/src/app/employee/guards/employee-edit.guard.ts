import { EmployeeComponent } from './../containers/employee/employee.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class EmployeeEditGuard implements CanDeactivate<EmployeeComponent> {
  canDeactivate(component: EmployeeComponent): boolean {
    return confirm(`Navigate away and lose all changes?`);
  }
}
