import { TestBed } from '@angular/core/testing';

import { AlterUserService } from './alter-user.service';

describe('AlterUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlterUserService = TestBed.get(AlterUserService);
    expect(service).toBeTruthy();
  });
});
