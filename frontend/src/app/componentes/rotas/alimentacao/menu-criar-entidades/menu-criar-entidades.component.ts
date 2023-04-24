import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlimentoComponent } from '../alimento/alimento.component';

@Component({
  selector: 'rng-menu-criar-entidades',
  templateUrl: './menu-criar-entidades.component.html',
  styleUrls: ['./menu-criar-entidades.component.scss']
})
export class MenuCriarEntidadesComponent implements OnInit {

  constructor(public dialogo: MatDialog) { }

  ngOnInit(): void {
  }

  public abrirDialogoAlimento(): void {

    this.dialogo.open(AlimentoComponent, {
      width: '100%',
      maxWidth: '70rem'
    })
  }
}
