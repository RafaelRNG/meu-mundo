import { Component, OnInit } from '@angular/core';
import { RefeicaoDetalhe } from 'src/app/tipos/PlanoAlimentar.tipo';

@Component({
  selector: 'rng-plano-alimentar-formulario',
  templateUrl: './plano-alimentar-formulario.component.html',
  styleUrls: ['./plano-alimentar-formulario.component.scss']
})
export class PlanoAlimentarFormularioComponent implements OnInit {

  refeicoes: RefeicaoDetalhe[] = [
    { codigo: 1, nome: 'Café da manhã' },
    { codigo: 2, nome: 'Almoço' },
    { codigo: 3, nome: 'Janta' },
  ]

  constructor() {

  }

  ngOnInit(): void {
  }
}
