import { HttpErrorInterceptor } from './http-error.interceptor';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import * as fromDirectives from './directives';
import { AuthInterceptor } from './auth.interceptor';

// https://angular.io/guide/styleguide#shared-feature-module

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ...fromDirectives.directives],
  declarations: [...fromDirectives.directives],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ]
})
export class SharedModule {
}
