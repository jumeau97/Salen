import { TestBed } from '@angular/core/testing';

import { JourRecService } from './jour-rec.service';

describe('JourRecService', () => {
  let service: JourRecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JourRecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
