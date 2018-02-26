import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export enum ActionTypes {
    Go = '[Router] Go',
    Back = '[Router] Back',
    Forward = '[Router] Forward'
}

export class Go implements Action {
  readonly type = ActionTypes.Go;
  constructor(
    public payload: {
      path: any[];
      query?: object;
      extras?: NavigationExtras;
    }
  ) {}
}

export class Back implements Action {
  readonly type = ActionTypes.Back;
}

export class Forward implements Action {
  readonly type = ActionTypes.Forward;
}

export type Actions = Go | Back | Forward;
