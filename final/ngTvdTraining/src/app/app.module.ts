import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import {
  RouterState,
  RouterStateSerializer,
  StoreRouterConnectingModule
} from '@ngrx/router-store';
import { MetaReducer, StoreModule } from '@ngrx/store';
// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { CustomSerializer, effects, reducers } from './store';

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule.forRoot(),
    LayoutModule,
    AppRoutingModule,

    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true
      }
    }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    }),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          maxAge: 10
        })
  ],
  declarations: [AppComponent],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule {}
