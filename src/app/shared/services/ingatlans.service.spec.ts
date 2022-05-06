import { TestBed } from '@angular/core/testing';

import { IngatlansService } from './ingatlans.service';

describe('IngatlansService', () => {
  let service: IngatlansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngatlansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
