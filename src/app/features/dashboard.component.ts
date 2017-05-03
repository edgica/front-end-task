import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import Page from "../repository/page.model";
import { AppState, getRepositoryEntities, getLoadingStatus, getRepositorySearchQuery } from '../reducers';
import { Store } from '@ngrx/store';
import { RepositoryActions } from '../repository/repository.actions';
import { Repository } from '../repository/repository.model';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`#my-logout-button { background: #F44336 }`]
})

export class DashboardComponent implements OnDestroy, OnInit {
  destroyed$: Subject<any> = new Subject<any>();
  page = new Page();
  repositories$: Observable<Repository[]>;
  columns = [
    { name: 'Name', sortable: true },
    { name: 'Url', sortable: true },
    { name: 'Description', sortable: true }
  ];
  loading$:  Observable<boolean>;
  searchQuery$: Observable<string>;
  constructor(
    private store: Store<AppState>,
    private repositoryActions: RepositoryActions
  ){
    this.repositories$ = store.select(getRepositoryEntities);
    this.loading$ = store.select(getLoadingStatus);
    this.searchQuery$ = store.select(getRepositorySearchQuery).take(1);
    this.page.pageNumber = 0;
    this.page.size = 30;
  }

  ngOnInit() {
    this.store.dispatch(this.repositoryActions.getRepositories(''));
    this.setPage({ offset: 0 });
  }
  get repositoriesCopy(): Observable<Repository[]> {
        return this.repositories$
            .map(obs => {
                //This is needed because the ngrx-datatable modifies the result to add an $$index to each result item and modifies the source array order when sorting
                return obs.map(v => JSON.parse(JSON.stringify(v))); //TODO: convert to use lodash deep clone
            });
  }
  search(query: string) {
    this.store.dispatch(this.repositoryActions.getRepositories(query));
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }
  setPage(pageInfo){
   this.page.pageNumber = pageInfo.offset;
 }
}
