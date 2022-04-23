import { TestBed } from '@angular/core/testing';

import { ProizvodiSearchService } from './proizvodi-search.service';

describe('ProizvodiSearchService', () => {
  let service: ProizvodiSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProizvodiSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
