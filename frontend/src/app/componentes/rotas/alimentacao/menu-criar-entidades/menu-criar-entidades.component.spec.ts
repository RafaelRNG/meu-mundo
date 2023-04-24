import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCriarEntidadesComponent } from './menu-criar-entidades.component';

describe('MenuCriarEntidadesComponent', () => {
  let component: MenuCriarEntidadesComponent;
  let fixture: ComponentFixture<MenuCriarEntidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCriarEntidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCriarEntidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
