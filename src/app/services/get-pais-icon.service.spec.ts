import { TestBed } from '@angular/core/testing';

import { GetPaisIconService } from './get-pais-icon.service';

describe('GetPaisIconService', () => {
  let service: GetPaisIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPaisIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
