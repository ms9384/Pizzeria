import { TestBed } from '@angular/core/testing';

import { GetPizzaService } from './get-pizza.service';

describe('GetPizzaService', () => {
  let service: GetPizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPizzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
