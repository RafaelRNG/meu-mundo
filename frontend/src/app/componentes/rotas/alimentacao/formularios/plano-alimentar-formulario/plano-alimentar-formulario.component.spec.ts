import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoAlimentarFormularioComponent } from './plano-alimentar-formulario.component';

describe('PlanoAlimentarFormularioComponent', () => {
  let component: PlanoAlimentarFormularioComponent;
  let fixture: ComponentFixture<PlanoAlimentarFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanoAlimentarFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanoAlimentarFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
