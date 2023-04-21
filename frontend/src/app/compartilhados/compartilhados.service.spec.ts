import { TestBed } from '@angular/core/testing';

import { CompartilhadosService } from './compartilhados.service';

describe('CompartilhadosService', () => {
  let service: CompartilhadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompartilhadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
