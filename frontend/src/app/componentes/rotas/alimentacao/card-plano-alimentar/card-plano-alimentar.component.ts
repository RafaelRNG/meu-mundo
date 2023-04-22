import { Component, Input, OnInit } from '@angular/core';
import { PlanoAlimentar } from '../../../../tipos/PlanoAlimentar.tipo';

@Component({
  selector: 'rng-card-plano-alimentar',
  templateUrl: './card-plano-alimentar.component.html',
  styleUrls: ['./card-plano-alimentar.component.scss']
})
export class CardPlanoAlimentarComponent implements OnInit {

  @Input() planoAlimentar!: PlanoAlimentar

  constructor() { }

  ngOnInit(): void {
  }
}
