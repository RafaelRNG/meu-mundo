import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPlanoAlimentarComponent } from './formulario-plano-alimentar.component';

describe('FormularioPlanoAlimentarComponent', () => {
  let component: FormularioPlanoAlimentarComponent;
  let fixture: ComponentFixture<FormularioPlanoAlimentarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPlanoAlimentarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPlanoAlimentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
