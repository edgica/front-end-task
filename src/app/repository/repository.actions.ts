/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Action } from '@ngrx/store';

@Injectable()

export class RepositoryActions {

  static GET_REPOSITORIES = '[Repository] Get repositories';
  getRepositories(query: string): Action {
    return {
      type: RepositoryActions.GET_REPOSITORIES,
      payload: query
    };
  }

  static SUCCESS_REPOSITORIES = '[Repository] Getting repositories are success';
  getRepositorySuccess(res): Action {
    return {
      type: RepositoryActions.SUCCESS_REPOSITORIES,
      payload: res
    };
  }

  static FAIL_REPOSITORIES = '[Repository] Getting repositories are success';
  getRepositoryFail(res): Action {
    return {
      type: RepositoryActions.FAIL_REPOSITORIES,
      payload: res
    };
  }
}
