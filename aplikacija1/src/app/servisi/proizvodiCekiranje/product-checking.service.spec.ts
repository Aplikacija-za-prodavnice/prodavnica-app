import { TestBed } from '@angular/core/testing';

import { ProductCheckingService } from './product-checking.service';

describe('ProductCheckingService', () => {
  let service: ProductCheckingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCheckingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
