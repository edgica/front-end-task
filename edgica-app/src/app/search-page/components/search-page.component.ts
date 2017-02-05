import { Component } from '@angular/core';

import { AppSearchPageService } from '../shared/search-page.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  providers: [AppSearchPageService],
})
export class AppSearchPageComponent {
  isSortExpanded: false;
  validSortItems: any = [
    {
      key: 'stars',
      label: 'Stars',
    },
    {
      key: 'forks',
      label: 'Forks',
    },
    {
      key: 'updated',
      label: 'Updated',
    },
  ];
  validOrderItems: any = [
    {
      key: 'asc',
      label: 'ASC',
    },
    {
      key: 'desc',
      label: 'DESC',
    },
  ];
  repositoriesTableColumns: any = [
    {
      key: 'full_name',
      label: 'Full name',
    },
    {
      key: 'forks_count',
      label: 'Forks',
    },
    {
      key: 'stargazers_count',
      label: 'Stars',
    },
    {
      key: 'updated_at',
      label: 'Updated',
    },
  ];
  foundRepositories: any = [];
  numberOfFoundRepositories: number = 0;
  searchParams:any = {
    q: 'map',
    sort: this.validSortItems[0],
    order: this.validOrderItems[1],
  };
  title:string = 'Search GitHub';

  constructor(private appSearchPageService: AppSearchPageService) {
  }

  onClickSearch() {
    let requestParams: any = {
      q: this.searchParams.q,
      sort: this.searchParams.sort.key,
      order: this.searchParams.order.key,
    };
    this.appSearchPageService.searchRepositories(requestParams)
      .then((response: any) => {
        let data = response.json(); // console.log(data);

        this.numberOfFoundRepositories = data.total_count;
        this.foundRepositories = data.items;
      })
      .catch((error: any) => {
        this.numberOfFoundRepositories = 0; // console.log(error.json());
      });
  }
}
