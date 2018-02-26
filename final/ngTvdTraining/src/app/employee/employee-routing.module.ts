import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainer from './containers';
import * as fromGuards from './guards';

const routes: Routes = [
  {
    path: '',
    component: fromContainer.EmployeeListComponent,
    canActivate: [fromGuards.EmployeeGuard]
   },
   {
    path: 'new',
    component: fromContainer.EmployeeComponent,
    canActivate: [fromGuards.EmployeeGuard]
  },
   {
     path: ':employeeId',
     component: fromContainer.EmployeeComponent,
     canActivate: [fromGuards.EmployeeGuard],
     canDeactivate: [fromGuards.EmployeeEditGuard]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule { }
