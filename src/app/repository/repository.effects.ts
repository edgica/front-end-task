/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { RepositoryActions } from './repository.actions';
import { RepositoryService } from './repository.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()

export class RepositoryEffects {
  constructor(
    private actions$: Actions,
    private repositoryService: RepositoryService,
    private repositoryActions: RepositoryActions
  ) { }

  @Effect() get$ = this.actions$
    .ofType(RepositoryActions.GET_REPOSITORIES)
    .map(action => action.payload)
    .debounceTime(800)
    .distinctUntilChanged()
    .switchMap((str) => this.repositoryService.getRepository(str)
      .mergeMap((res: any) => Observable.of(
        this.repositoryActions.getRepositorySuccess(res)
        )
      )
      .catch((err) => Observable.of(
        this.repositoryActions.getRepositoryFail(err)
      ))
    );
}
