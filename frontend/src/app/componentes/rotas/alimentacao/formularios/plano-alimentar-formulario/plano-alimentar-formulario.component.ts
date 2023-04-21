import { Component, OnInit } from '@angular/core';
import { RefeicaoDetalhe } from 'src/app/tipos/PlanoAlimentar.tipo';
import { RefeicaoService } from '../../servicos/refeicao.service';

@Component({
  selector: 'rng-plano-alimentar-formulario',
  templateUrl: './plano-alimentar-formulario.component.html',
  styleUrls: ['./plano-alimentar-formulario.component.scss']
})
export class PlanoAlimentarFormularioComponent implements OnInit {

  refeicoes: RefeicaoDetalhe[] = []

  constructor(private refeicaoServico: RefeicaoService) { }

  ngOnInit(): void {
    this.refeicaoServico.retornarRefeicoes().subscribe({
      next: resposta => this.refeicoes = resposta
    })
  }
}
