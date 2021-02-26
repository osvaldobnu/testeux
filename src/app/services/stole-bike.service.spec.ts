import { TestBed } from '@angular/core/testing';

import { StoleBikeService } from './stole-bike.service';

describe('StoleBikeService', () => {
  let service: StoleBikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoleBikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
