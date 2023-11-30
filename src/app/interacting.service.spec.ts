import { TestBed } from '@angular/core/testing';

import { InteractingService } from './interacting.service';

describe('InteractingService', () => {
  let service: InteractingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteractingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
