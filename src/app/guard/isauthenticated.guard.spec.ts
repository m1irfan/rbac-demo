import { TestBed } from '@angular/core/testing';

import { IsauthenticatedGuard } from './isauthenticated.guard';

describe('IsauthenticatedGuard', () => {
  let guard: IsauthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsauthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
