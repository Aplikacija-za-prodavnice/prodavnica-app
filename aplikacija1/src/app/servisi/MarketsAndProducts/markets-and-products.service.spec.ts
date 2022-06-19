import { TestBed } from '@angular/core/testing';

import { MarketsAndProductsService } from './markets-and-products.service';

describe('MarketsAndProductsService', () => {
  let service: MarketsAndProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketsAndProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
