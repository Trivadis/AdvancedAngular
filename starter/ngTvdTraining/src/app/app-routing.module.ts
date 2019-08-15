import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromEmployeeContainer from './employee/containers';
import { StandardLayoutComponent } from './layout/standard-layout/standard-layout.component';
import { WelcomeComponent } from './layout/welcome/welcome.component';

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
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
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
