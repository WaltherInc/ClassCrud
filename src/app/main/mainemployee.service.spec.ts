import { TestBed } from '@angular/core/testing';

import { MainemployeeService } from './mainemployee.service';

describe('MainemployeeService', () => {
  let service: MainemployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainemployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
