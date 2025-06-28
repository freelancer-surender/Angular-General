import { TestBed } from '@angular/core/testing';

import { Shared } from './shared';

describe('Shared', () => {
  let service: Shared;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Shared);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
