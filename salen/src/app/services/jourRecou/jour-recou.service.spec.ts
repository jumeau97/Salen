import { TestBed } from '@angular/core/testing';

import { JourRecouService } from './jour-recou.service';

describe('JourRecouService', () => {
  let service: JourRecouService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JourRecouService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
