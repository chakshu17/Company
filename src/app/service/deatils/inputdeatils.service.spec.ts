import { TestBed } from '@angular/core/testing';

import { InputdeatilsService } from './inputdeatils.service';

describe('InputdeatilsService', () => {
  let service: InputdeatilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputdeatilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
