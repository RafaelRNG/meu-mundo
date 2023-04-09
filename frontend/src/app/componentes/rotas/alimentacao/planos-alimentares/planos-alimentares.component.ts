import { Component, OnInit } from '@angular/core';
import { AlimentacaoService } from '../alimentacao.service';
import { PlanoAlimentar } from '../alimentacao-tipos/PlanoAlimentar.tipo';
import { PlanoAlimentarFicticio } from '../dados-ficticios/PlanoAlimentar.ficticio';

@Component({
  selector: 'rng-planos-alimentares',
  templateUrl: './planos-alimentares.component.html',
  styleUrls: ['./planos-alimentares.component.scss']
})
export class PlanosAlimentaresComponent implements OnInit {

  public planosAlimentares!: PlanoAlimentar[]

  constructor(private alimentacaoService: AlimentacaoService) { }

  ngOnInit(): void {
    this.planosAlimentares = PlanoAlimentarFicticio
  }
}