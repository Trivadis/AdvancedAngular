import { NgModule } from '@angular/core';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromPipes from './pipes';
import * as fromServices from './services';
import * as fromGuards from './guards';
import { SharedModule } from '../shared/shared.module';
import { EmployeeRoutingModule } from './employee-routing.module';

@NgModule({
    imports: [SharedModule, EmployeeRoutingModule],
    exports: [],
    declarations: [
        ...fromContainers.containers,
        ...fromComponents.components,
        ...fromPipes.pipes],
    providers: [...fromServices.services, ...fromGuards.guards],
})
export class EmployeeModule { }
