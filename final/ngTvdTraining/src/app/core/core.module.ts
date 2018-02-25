import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperService } from './super-service';


// https://angular.io/guide/styleguide#core-feature-module

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [],
  providers: [SuperService]
})
export class CoreModule { }
