import { TestBed } from '@angular/core/testing';

import { ValidaruserGuard } from './validaruser.guard';

describe('ValidaruserGuard', () => {
  let guard: ValidaruserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidaruserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
