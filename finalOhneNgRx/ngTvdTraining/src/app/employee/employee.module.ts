import { NgModule } from '@angular/core';
import { AutoFocusModule } from 'auto-focus';
import { SharedModule } from '../shared/shared.module';
import * as fromComponents from './components';
import * as fromContainers from './containers';
import { EmployeeRoutingModule } from './employee-routing.module';
import * as fromGuards from './guards';
import * as fromPipes from './pipes';
import * as fromServices from './services';
import { IsEmailValidator } from './validators/check-email-match.validator';

@NgModule({
  imports: [SharedModule, EmployeeRoutingModule, AutoFocusModule],
  exports: [],
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components,
    ...fromPipes.pipes,
    IsEmailValidator
  ],
  providers: [...fromServices.services, ...fromGuards.guards]
})
export class EmployeeModule { }
