import { TestBed, inject } from '@angular/core/testing';

import { GitHubSearchService } from './git-hub-search.service';

describe('GitHubSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitHubSearchService]
    });
  });

  it('should ...', inject([GitHubSearchService], (service: GitHubSearchService) => {
    expect(service).toBeTruthy();
  }));
});
