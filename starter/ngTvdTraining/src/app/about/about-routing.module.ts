import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutListComponent } from './containers/about-list/about-list.component';

const routes: Routes = [
  { path: '', component: AboutListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule { }
