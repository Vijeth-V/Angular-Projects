import { TestBed } from '@angular/core/testing';

import { ItuneServiceService } from './itune-service.service';

describe('ItuneServiceService', () => {
  let service: ItuneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItuneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
