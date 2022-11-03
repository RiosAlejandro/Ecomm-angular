import { TestBed } from '@angular/core/testing';

import { ApiFakeStoreService } from './api-fake-store.service';

describe('ApiFakeStoreService', () => {
  let service: ApiFakeStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFakeStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
