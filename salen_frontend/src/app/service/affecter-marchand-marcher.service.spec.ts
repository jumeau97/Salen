import { TestBed } from '@angular/core/testing';

import { AffecterMarchandMarcherService } from './affecter-marchand-marcher.service';

describe('AffecterMarchandMarcherService', () => {
  let service: AffecterMarchandMarcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffecterMarchandMarcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
