import {    Params  } from '@angular/router';
  import * as fromRouter from '@ngrx/router-store';


  export interface AppState {
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
  }

  export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
  }


