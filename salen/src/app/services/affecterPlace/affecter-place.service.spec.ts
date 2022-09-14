import { TestBed } from '@angular/core/testing';

import { AffecterPlaceService } from './affecter-place.service';

describe('AffecterPlaceService', () => {
  let service: AffecterPlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffecterPlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
