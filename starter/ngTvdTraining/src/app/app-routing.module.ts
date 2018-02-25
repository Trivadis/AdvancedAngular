import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './layout/welcome/welcome.component';
import { StandardLayoutComponent } from './layout/standard-layout/standard-layout.component';

import * as fromEmployeeContainer from './employee/containers';
import * as fromEmployeeComponents from './employee/components';

const routes: Routes = [
  {
    path: '',
    component: StandardLayoutComponent,
    children: [
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'employees',
        component: fromEmployeeContainer.EmployeeListComponent
      },
      {
        path: 'employees/new',
        component: fromEmployeeContainer.EmployeeComponent
      },
      {
        path: 'employees/:employeeId',
        component: fromEmployeeContainer.EmployeeComponent
      },
      {
        path: 'about',
        loadChildren: './about/about.module#AboutModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
