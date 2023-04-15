import { Component, OnInit } from '@angular/core';
import { AlimentacaoService } from '../alimentacao.service';
import { PlanoAlimentar } from '../../../../tipos/PlanoAlimentar.tipo';
import { MatDialog } from '@angular/material/dialog'
import { PlanoAlimentarFicticio } from '../../../../dados-ficticios/PlanoAlimentar.ficticio';
import { FormularioPlanoAlimentarComponent } from '../formularios/formulario-plano-alimentar/formulario-plano-alimentar.component';

@Component({
  selector: 'rng-planos-alimentares',
  templateUrl: './planos-alimentares.component.html',
  styleUrls: ['./planos-alimentares.component.scss']
})
export class PlanosAlimentaresComponent implements OnInit {

  public planosAlimentares!: PlanoAlimentar[]

  public semRespostaApi: boolean = false

  constructor(private alimentacaoServico: AlimentacaoService, public dialog: MatDialog) { }

  ngOnInit(): void {
    //dado mocado para teste
    //this.planosAlimentares = PlanoAlimentarFicticio
    this.retornarPlanosAlimentares()
  }

  public retornarPlanosAlimentares() {
    this.alimentacaoServico.retornarPlanosAlimentares()
      .subscribe({
        next: (resposta: PlanoAlimentar[]) => this.planosAlimentares = resposta,
        error: () => this.semRespostaApi = true
      })
  }

  public abrirDialogo(): void {
    this.dialog.open(FormularioPlanoAlimentarComponent, {
      width: '100%',
      maxWidth: '70rem',
    })

    this.dialog.afterAllClosed.subscribe({
      next: () => this.retornarPlanosAlimentares()
    })
  }
}
