import { TestBed } from '@angular/core/testing';

import { AffPlaceMarcherService } from './aff-place-marcher.service';

describe('AffPlaceMarcherService', () => {
  let service: AffPlaceMarcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffPlaceMarcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
