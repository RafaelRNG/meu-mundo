import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroRespostaComponent } from './erro-resposta.component';

describe('ErroRespostaComponent', () => {
  let component: ErroRespostaComponent;
  let fixture: ComponentFixture<ErroRespostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErroRespostaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErroRespostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
