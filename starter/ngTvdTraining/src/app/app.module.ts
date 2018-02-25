import { LayoutModule } from './layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import * as fromEmployeeContainers from './employee/containers';
import * as fromEmployeeComponents from './employee/components';
import * as fromEmployeePipes from './employee/pipes';
import * as fromEmployeeServices from './employee/services';
import * as fromEmployeeGuards from './employee/guards';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, SharedModule, CoreModule, LayoutModule, AppRoutingModule],
  declarations: [
    AppComponent,
    ...fromEmployeeContainers.containers,
    ...fromEmployeeComponents.components,
    ...fromEmployeePipes.pipes
  ],
  providers: [...fromEmployeeServices.services, ...fromEmployeeGuards.guards],
  bootstrap: [AppComponent]
})
export class AppModule {}
