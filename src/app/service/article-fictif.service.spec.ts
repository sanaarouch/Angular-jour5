import { TestBed } from '@angular/core/testing';

import { ArticleFictifService } from './article-fictif.service';

describe('ArticleFictifService', () => {
  let service: ArticleFictifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleFictifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});