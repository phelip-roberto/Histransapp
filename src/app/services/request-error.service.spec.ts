import { TestBed } from '@angular/core/testing';

import { RequestErrorService } from './request-error.service';

describe('RequestErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestErrorService = TestBed.get(RequestErrorService);
    expect(service).toBeTruthy();
  });
});
