import { TestBed } from '@angular/core/testing';

import { VendorDisplayService } from './vendor-display.service';

describe('VendorDisplayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendorDisplayService = TestBed.get(VendorDisplayService);
    expect(service).toBeTruthy();
  });
});
