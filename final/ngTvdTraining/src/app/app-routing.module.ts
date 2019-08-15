
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCustomPreloader } from './core/app-custom-preloader';
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
        loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
        data: { preload: false }
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
        data: { preload: true }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
