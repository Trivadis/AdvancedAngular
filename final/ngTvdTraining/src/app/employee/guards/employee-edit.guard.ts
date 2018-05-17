import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot } from '@angular/router';
import { EmployeeComponent } from './../containers/employee/employee.component';

@Injectable()
export class EmployeeEditGuard implements CanActivate, CanDeactivate<EmployeeComponent> {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const employeeId = +route.paramMap.get('employeeId');

    if (isNaN(employeeId)) {
      this.router.navigate(['/employees']);
    } else {
      return true;
    }
  }
  canDeactivate(component: EmployeeComponent): boolean {
    return confirm(`Navigate away and lose all changes?`);
  }
}
