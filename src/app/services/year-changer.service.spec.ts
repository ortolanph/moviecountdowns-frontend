import {TestBed} from '@angular/core/testing';

import {YearChangerService} from './year-changer.service';

describe('YearChangerService', () => {
  let service: YearChangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YearChangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
