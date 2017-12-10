import { TestBed, inject } from '@angular/core/testing';

import { ApiInterceptorService } from './api-interceptor.service';

describe('ApiInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiInterceptorService]
    });
  });

  it('should be created', inject([ApiInterceptorService], (service: ApiInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
