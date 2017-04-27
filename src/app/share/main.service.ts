import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

@Injectable()
export class MainService {
  apiUrl = 'https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc';
  constructor(private http: Http) {}

  getData() : Observable <any> {
    return this.http.get(this.apiUrl)
      .map(res => res.json())
      .map(data => data.items)
      .catch(this.catchError);
  }
  catchError(error: any){
    return Observable.throw(error.message || error);
  }
}
