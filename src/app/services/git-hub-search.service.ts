import {Injectable} from '@angular/core';
import {EndPoints} from '../classes/end-points';
import {Http, RequestOptions} from '@angular/http';

@Injectable()
export class GitHubSearchService {
  searchURL: string = EndPoints.host + EndPoints.search;

  constructor(private http_: Http) {
  }


  searchWithParams(perPage:number, page: number) {
    let query: string = '?q=map+language:javascript&sort=stars&order=desc&per_page='+perPage+'&page='+page;
    return this.http_.get(this.searchURL + query, new RequestOptions()).map( res => res.json());
  }
}
