import { TestBed } from '@angular/core/testing';

import { NizService } from './niz.service';

describe('NizService', () => {
  let service: NizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
