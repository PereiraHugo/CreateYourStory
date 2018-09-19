import { TestBed, inject } from '@angular/core/testing';

import { ApiData } from './api-data.service';

describe('ApiData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiData]
    });
  });

  it('should be created', inject([ApiData], (service: ApiData) => {
    expect(service).toBeTruthy();
  }));
});
