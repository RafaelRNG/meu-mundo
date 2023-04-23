import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarPlanoAlimentarComponent } from './alterar-plano-alimentar.component';

describe('AlterarPlanoAlimentarComponent', () => {
  let component: AlterarPlanoAlimentarComponent;
  let fixture: ComponentFixture<AlterarPlanoAlimentarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarPlanoAlimentarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterarPlanoAlimentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
