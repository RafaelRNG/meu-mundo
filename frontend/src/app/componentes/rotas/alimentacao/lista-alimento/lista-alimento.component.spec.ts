import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlimentoComponent } from './lista-alimento.component';

describe('ListaAlimentoComponent', () => {
  let component: ListaAlimentoComponent;
  let fixture: ComponentFixture<ListaAlimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAlimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAlimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
