import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheAlimentacaoComponent } from './detalhe-alimentacao.component';

describe('DetalheAlimentacaoComponent', () => {
  let component: DetalheAlimentacaoComponent;
  let fixture: ComponentFixture<DetalheAlimentacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheAlimentacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheAlimentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
