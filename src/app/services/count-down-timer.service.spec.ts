import {TestBed} from '@angular/core/testing';

import {CountDownTimerService} from './count-down-timer.service';

describe('CountDownTimerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountDownTimerService = TestBed.get(CountDownTimerService);
    expect(service).toBeTruthy();
  });
});
