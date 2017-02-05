import { Component } from '@angular/core';

import { AppSearchPageService } from '../shared/search-page.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  providers: [AppSearchPageService],
})
export class AppSearchPageComponent {
  searchParams:any = {
    q: 'map',
    sort: 'stars',
    order: 'desc',
  };
  title:string = 'Search GitHub';

  constructor(private appSearchPageService: AppSearchPageService) {
  }

  onClickSearch() {
    let requestParams: any = {
      q: this.searchParams.q,
      sort: this.searchParams.stars,
      order: this.searchParams.desc,
    };
    this.appSearchPageService.searchRepositories(requestParams)
      .then((response: any) => {
        console.log(response.json());
      })
      .catch((error: any) => {
        console.log(error.json());
      });
  }
}
