import { Component, Input, OnInit } from '@angular/core';
import { DetalhesDoAlimento } from 'src/app/tipos/PlanoAlimentar.tipo';

@Component({
  selector: 'rng-lista-detalhes-alimentos',
  templateUrl: './lista-detalhes-alimentos.component.html',
  styleUrls: ['./lista-detalhes-alimentos.component.scss']
})
export class ListaDetalhesAlimentosComponent implements OnInit {

  public cabecalho = ['pesoBruto', 'carboidrato', 'proteina', 'gordura', 'alimento']

  @Input() public detalhesAlimentos!: DetalhesDoAlimento[]

  constructor() { }

  ngOnInit(): void {
  }

}
