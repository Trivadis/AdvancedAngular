import { EmployeeComponent } from './../containers/employee/employee.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class EmployeeEditGuard implements CanDeactivate<EmployeeComponent> {
  canDeactivate(component: EmployeeComponent): boolean {
    if (!component.employeeFormComp.form.valid && component.employeeFormComp.form.touched) {
      return confirm(`Navigate away and lose all changes?`);
    }
    return true;
  }
}
