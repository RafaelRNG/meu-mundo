import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesAlimentosComponent } from './detalhes-alimentos.component';

describe('DetalhesAlimentosComponent', () => {
  let component: DetalhesAlimentosComponent;
  let fixture: ComponentFixture<DetalhesAlimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesAlimentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
