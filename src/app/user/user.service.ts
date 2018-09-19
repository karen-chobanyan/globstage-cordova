import {Injectable} from '@angular/core';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {filter, take} from "rxjs/operators";

@Injectable()
export class UserService {
  user = new BehaviorSubject<any>(null);

  constructor() {
  }

  get userAsync() {
    const a = localStorage.getItem('b2bUser') ? JSON.parse(localStorage.getItem('b2bUser')) : this.user.getValue();

    this.setUser(a);

    return this.user.asObservable();
  }

  get userReady() {
    return this.user.pipe(
      filter(u => !!u),
      take(1))
  }

  setUser(a) {
    this.user.next(a);
    localStorage.removeItem('b2bUser');
    if (!!JSON.stringify(this.user.getValue())) {
      localStorage.setItem('b2bUser', JSON.stringify(this.user.getValue()));
    }
  }
}
