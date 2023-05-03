import { TestBed } from '@angular/core/testing';

import { DetalheAlimentoService } from './detalhe-alimento.service';

describe('DetalheAlimentoService', () => {
  let service: DetalheAlimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalheAlimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
