import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlanoAlimentarComponent } from './card-plano-alimentar.component';

describe('CardPlanoAlimentarComponent', () => {
  let component: CardPlanoAlimentarComponent;
  let fixture: ComponentFixture<CardPlanoAlimentarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPlanoAlimentarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPlanoAlimentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
