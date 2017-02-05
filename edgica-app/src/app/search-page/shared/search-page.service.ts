import { Injectable, Inject } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

let searchRepositoriesUrl: string = 'https://api.github.com/search/repositories';

@Injectable()
export class AppSearchPageService {

  constructor(private http: Http) {
  }

  searchRepositories(params): Promise<void> {
    let urlSearchParams: URLSearchParams = new URLSearchParams();
    urlSearchParams.set('q', params.q);
    urlSearchParams.set('sort', params.sort);
    urlSearchParams.set('order', params.order);

    let requestParams: any = {
      search: urlSearchParams,
    };

    return this.http.get(searchRepositoriesUrl, requestParams).toPromise();
  }
}
