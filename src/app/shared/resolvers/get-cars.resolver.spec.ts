import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { getCarsResolver } from './get-cars.resolver';

describe('getCarsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => getCarsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
