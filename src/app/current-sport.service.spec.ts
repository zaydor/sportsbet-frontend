import { TestBed } from '@angular/core/testing';

import { CurrentSportService } from './current-sport.service';

describe('CurrentSportService', () => {
  let service: CurrentSportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentSportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
