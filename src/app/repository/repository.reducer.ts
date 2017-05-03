/* tslint:disable: no-switch-case-fall-through */
import { Action } from '@ngrx/store';

import { RepositoryActions } from './repository.actions';
import { Repository } from './repository.model';

export interface RepositoryState {
  repositories: Repository[];
  loading: boolean;
  query: string;
  totalCount: number;
  loaded: boolean;
};

export const initialState: RepositoryState = {
  repositories: [],
  query: '',
  loading: false,
  totalCount: 0,
  loaded: false,
};

export function repositoryReducer(state = initialState, action: Action): RepositoryState {
  switch (action.type) {
    case RepositoryActions.GET_REPOSITORIES: {
      return Object.assign({}, state, {
        query : action.payload,
        loading: true
      });
    }
    case RepositoryActions.SUCCESS_REPOSITORIES: {
      return Object.assign({}, state, {
        loading: false,
        repositories: action.payload.items,
        totalCount: action.payload.total_count,
        loaded: true
      });
    }
    default: {
      return state;
    }
  }
}

export const getEntities = (state: RepositoryState) => state.repositories;
export const getTotal = (state: RepositoryState) => state.totalCount;
export const getLoading = (state: RepositoryState) => state.loading;
export const getQuery = (state: RepositoryState) => state.query;
