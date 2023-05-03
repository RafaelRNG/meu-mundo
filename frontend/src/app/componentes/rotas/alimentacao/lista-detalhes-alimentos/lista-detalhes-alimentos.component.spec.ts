import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDetalhesAlimentosComponent } from './lista-detalhes-alimentos.component';

describe('ListaDetalhesAlimentosComponent', () => {
  let component: ListaDetalhesAlimentosComponent;
  let fixture: ComponentFixture<ListaDetalhesAlimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDetalhesAlimentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDetalhesAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
