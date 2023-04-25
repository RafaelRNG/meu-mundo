import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlimentoDetalhe } from 'src/app/tipos/PlanoAlimentar.tipo';

@Component({
  selector: 'rng-lista-alimento',
  templateUrl: './lista-alimento.component.html',
  styleUrls: ['./lista-alimento.component.scss']
})
export class ListaAlimentoComponent implements OnInit {

  public cabecalho = ['nome', 'acao']
  @Input() public alimentos!: AlimentoDetalhe[]

  @Output() public alimentoEmitido: EventEmitter<AlimentoDetalhe> = new EventEmitter<AlimentoDetalhe>()

  constructor() { }

  ngOnInit(): void {
  }

  public emitirAlimento(alimento: AlimentoDetalhe) {
    this.alimentoEmitido.emit(alimento)
  }
}
