import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { API_GITHUB } from '../services/constants';
import { RequestBase } from '../services/request-base';

@Injectable()
export class RepositoryService extends RequestBase {
  constructor(public http: Http) {
    super(http);
  }

  getRepository(query: string): Observable<string> {
    return this.http.get(`${API_GITHUB}?q=${query}+language:javascript&sort=stars&order=desc`)
      .map(res => res.json());
  }
}
