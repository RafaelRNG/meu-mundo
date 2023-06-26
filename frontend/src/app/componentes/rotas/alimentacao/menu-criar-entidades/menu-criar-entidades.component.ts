import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlimentoComponent } from '../alimento/alimento.component';
import { DetalhesAlimentosComponent } from '../detalhes-alimentos/detalhes-alimentos.component';
import { RefeicoesComponent } from '../refeicoes/refeicoes.component';

@Component({
  selector: 'rng-menu-criar-entidades',
  templateUrl: './menu-criar-entidades.component.html',
  styleUrls: ['./menu-criar-entidades.component.scss']
})
export class MenuCriarEntidadesComponent implements OnInit {

  constructor(public dialogo: MatDialog) { }

  ngOnInit(): void {
  }

  public abrirDialogRefeicao(): void {
    this.dialogo.open(RefeicoesComponent, {
      width: '100%',
      maxWidth: '70rem'
    })
  }

  public abrirDialogoDetalhesAlimento(): void {
    this.dialogo.open(DetalhesAlimentosComponent, {
      width: '100%',
      maxWidth: '70rem'
    })
  }

  public abrirDialogoAlimento(): void {
    this.dialogo.open(AlimentoComponent, {
      width: '100%',
      maxWidth: '70rem'
    })
  }
}
