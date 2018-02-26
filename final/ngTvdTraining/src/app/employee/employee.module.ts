import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { EmployeeRoutingModule } from './employee-routing.module';

import { reducers, effects } from './store';
// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

// guards
import * as fromGuards from './guards';

// pipes
import * as fromPipes from './pipes';

// services
import * as fromServices from './services';

@NgModule({
  imports: [
    SharedModule,
    EmployeeRoutingModule,

    StoreModule.forFeature('employees', reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [],
  declarations: [...fromContainers.containers, ...fromComponents.components, ...fromPipes.pipes],
  providers: [...fromServices.services, ...fromGuards.guards]
})
export class EmployeeModule {}
