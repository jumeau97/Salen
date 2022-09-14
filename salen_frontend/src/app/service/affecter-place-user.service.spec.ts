import { TestBed } from '@angular/core/testing';

import { AffecterPlaceUserService } from './affecter-place-user.service';

describe('AffecterPlaceUserService', () => {
  let service: AffecterPlaceUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffecterPlaceUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
