import { Component, OnInit } from '@angular/core';
import { PlanoAlimentar } from '../../../../tipos/PlanoAlimentar.tipo';
//import { PlanoAlimentarFicticio } from '../../../../dados-ficticios/PlanoAlimentar.ficticio';
import { PlanoAlimentarService } from '../servicos/plano-alimentar.service';

@Component({
  selector: 'rng-planos-alimentares',
  templateUrl: './planos-alimentares.component.html',
  styleUrls: ['./planos-alimentares.component.scss']
})
export class PlanosAlimentaresComponent implements OnInit {

  public planosAlimentares!: PlanoAlimentar[]

  public semRespostaApi: boolean = false
  public carregando: boolean = true

  constructor(private planoAlimentarServico: PlanoAlimentarService) { }

  ngOnInit(): void {
    //dado mocado para teste
    //this.planosAlimentares = PlanoAlimentarFicticio
    this.retornarPlanosAlimentares()
  }

  public retornarPlanosAlimentares() {
    this.planoAlimentarServico.retornarPlanosAlimentares()
      .subscribe({
        next: (resposta: PlanoAlimentar[]) => {
          this.planosAlimentares = resposta
          this.carregando = false
        },
        error: () => {
          this.semRespostaApi = true
          this.carregando = false
        }
      })
  }
}
