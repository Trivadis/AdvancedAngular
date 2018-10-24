import { AppCustomPreloader } from './app-custom-preloader';
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperService } from './super-service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// https://angular.io/guide/styleguide#core-feature-module

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: []
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(`Core has already been loaded. Import Core modules in the AppModule only.`);
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        SuperService,
        AppCustomPreloader
      ]
    };
  }
}
