import { Injectable } from '@angular/core';

@Injectable()
export class SuperService {
  constructor() {}

  get(): Boolean {
    return true;
  }
}
