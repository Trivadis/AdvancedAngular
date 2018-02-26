
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './layout/welcome/welcome.component';
import { StandardLayoutComponent } from './layout/standard-layout/standard-layout.component';
import { AppCustomPreloader } from './core/app-custom-preloader';

const routes: Routes = [
  {
    path: '',
    component: StandardLayoutComponent,
    children: [
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'welcome', component: WelcomeComponent },
      {
        path: 'employees',
        loadChildren: './employee/employee.module#EmployeeModule',
        data: { preload: false }
      },
      {
        path: 'about',
        loadChildren: './about/about.module#AboutModule',
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
