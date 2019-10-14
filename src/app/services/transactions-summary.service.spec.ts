import { TestBed } from '@angular/core/testing';

import { TransactionsSummaryService } from './transactions-summary.service';

describe('TransactionsSummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionsSummaryService = TestBed.get(TransactionsSummaryService);
    expect(service).toBeTruthy();
  });
});
