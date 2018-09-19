import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {appConfig} from '../app.config';

@Injectable()
export class GroupService {
  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
  }

  createGroup(group) {
    return this.http.post(`${appConfig.apiUrl}/groups`, group);
  }

  getGroups() {
    return this.http.get(`${appConfig.apiUrl}/groups`);
  }

  getGroup(id) {
    return this.http.get(`${appConfig.apiUrl}/groups/${id}`);
  }

  subscribeToGroup(id) {
    return this.http.get(`${appConfig.apiUrl}/groups/${id}`);
  }
}
