import { Component, OnInit } from '@angular/core';
import { DetalhesDoAlimento } from 'src/app/tipos/PlanoAlimentar.tipo';
import { DetalheAlimentoService } from '../servicos/detalhe-alimento.service';
import { CompartilhadosService } from 'src/app/compartilhados/compartilhados.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'rng-lista-detalhes-alimentos',
  templateUrl: './lista-detalhes-alimentos.component.html',
  styleUrls: ['./lista-detalhes-alimentos.component.scss']
})
export class ListaDetalhesAlimentosComponent implements OnInit {

  public cabecalho = ['pesoBruto', 'carboidrato', 'proteina', 'gordura', 'alimento']
  public detalhesAlimentos!: DetalhesDoAlimento[]

  public totalElementos!: number
  public tamanhoPagina!: number

  constructor(private detalheAlimentoService: DetalheAlimentoService,
    private compartilhadosService: CompartilhadosService) { }

  ngOnInit(): void {
    this.retornarDetalhesAlimentos()
  }

  public mudarPagina(eventoPagina: PageEvent): void {
    const indice = eventoPagina.pageIndex
    this.retornarDetalhesAlimentos(indice)
  }

  public retornarDetalhesAlimentos(numeroPagina: number = 0): void {
    this.detalheAlimentoService.retornarDetalhesAlimentos(numeroPagina)
      .subscribe({
        next: resposta => {
          this.detalhesAlimentos = resposta.content
          this.tamanhoPagina = resposta.size
          this.totalElementos = resposta.totalElements
        },
        error: () => this.compartilhadosService.ativarSnackBar('Erro ao retornar detalhes dos alimentos', 'mensagem-erro')
      })
  }
}
