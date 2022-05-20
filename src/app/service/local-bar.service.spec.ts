import { TestBed } from '@angular/core/testing';

import { LocalBarService } from './local-bar.service';

describe('LocalBarService', () => {
  let service: LocalBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
