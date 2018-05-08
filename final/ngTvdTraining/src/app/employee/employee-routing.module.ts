import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainer from './containers';
import * as fromGuard from './guards';

const routes: Routes = [
  {
    path: '',
    component: fromContainer.EmployeeListComponent
  },
  {
    path: 'new',
    component: fromContainer.EmployeeComponent
  },
  {
    path: ':employeeId',
    component: fromContainer.EmployeeComponent,
    canActivate: [fromGuard.EmployeeEditGuard],
    canDeactivate: [fromGuard.EmployeeEditGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {}
