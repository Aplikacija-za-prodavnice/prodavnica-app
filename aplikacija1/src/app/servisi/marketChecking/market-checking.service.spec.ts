import { TestBed } from '@angular/core/testing';

import { MarketCheckingService } from './market-checking.service';

describe('MarketCheckingService', () => {
  let service: MarketCheckingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketCheckingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
