import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPlanoAlimentarComponent } from './criar-plano-alimentar.component';

describe('CriarPlanoAlimentarComponent', () => {
  let component: CriarPlanoAlimentarComponent;
  let fixture: ComponentFixture<CriarPlanoAlimentarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarPlanoAlimentarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarPlanoAlimentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
