import { TestBed, inject } from '@angular/core/testing';

import { MybucketService } from './mybucket.service';

describe('MybucketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MybucketService]
    });
  });

  it('should be created', inject([MybucketService], (service: MybucketService) => {
    expect(service).toBeTruthy();
  }));
});
