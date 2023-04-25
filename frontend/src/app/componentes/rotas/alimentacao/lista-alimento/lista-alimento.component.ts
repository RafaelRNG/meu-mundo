import { Component, OnInit } from '@angular/core';
import { AlimentoDetalhe } from 'src/app/tipos/PlanoAlimentar.tipo';
import { AlimentoService } from '../servicos/alimento.service';

@Component({
  selector: 'rng-lista-alimento',
  templateUrl: './lista-alimento.component.html',
  styleUrls: ['./lista-alimento.component.scss']
})
export class ListaAlimentoComponent implements OnInit {

  public cabecalho = ['nome', 'acao']
  public alimentos!: AlimentoDetalhe[]

  constructor(private alimentoServico: AlimentoService) { }

  ngOnInit(): void {
    this.carregarAlimentos()
  }

  public carregarAlimentos(): void {
    this.alimentoServico.retornarAlimentos()
      .subscribe({
        next: (resposta: AlimentoDetalhe[]) => {
          this.alimentos = resposta
        }
      })
  }
}
