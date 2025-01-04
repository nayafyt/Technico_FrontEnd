import { TestBed } from '@angular/core/testing';

import { RepairsOngoingService } from './repairs-ongoing.service';

describe('RepairsOngoingService', () => {
  let service: RepairsOngoingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepairsOngoingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
