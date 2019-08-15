import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../state/app.state';

export const reducers: ActionReducerMap<fromRoot.AppState> = {
  routerReducer: fromRouter.routerReducer
};

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<fromRoot.RouterStateUrl>
>('routerReducer');

export class CustomSerializer implements fromRouter.RouterStateSerializer<fromRoot.RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): fromRoot.RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const { params } = state;

    return { url, queryParams, params };
  }
}
