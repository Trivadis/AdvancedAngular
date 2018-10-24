import { NgModule } from '@angular/core';

import { AboutListComponent } from './containers/about-list/about-list.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [AboutRoutingModule],
  exports: [],
  declarations: [AboutListComponent],
  providers: []
})
export class AboutModule {}
