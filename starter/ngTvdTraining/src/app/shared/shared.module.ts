import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import * as fromDirectives from './directives';

// https://angular.io/guide/styleguide#shared-feature-module

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ...fromDirectives.directives],
  declarations: [...fromDirectives.directives],
  providers: []
})
export class SharedModule {
}
