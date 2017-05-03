import { RepositoryActions } from './repository/repository.actions';
import { RepositoryService } from './repository/repository.service';

export const APP_PROVIDERS = [
  RepositoryActions,
  RepositoryService
];
