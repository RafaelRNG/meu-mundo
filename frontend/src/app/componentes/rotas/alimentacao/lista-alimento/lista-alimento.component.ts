import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlimentoDetalhe } from 'src/app/tipos/PlanoAlimentar.tipo';

@Component({
  selector: 'rng-lista-alimento',
  templateUrl: './lista-alimento.component.html',
  styleUrls: ['./lista-alimento.component.scss']
})
export class ListaAlimentoComponent implements OnInit {

  public cabecalho: string[] = ['nome', 'acao']

  @Input() public alimentos!: AlimentoDetalhe[]
  @Output() public alimentoEmitido: EventEmitter<AlimentoDetalhe> = new EventEmitter<AlimentoDetalhe>()
  @Output() public recarregar: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  public emitirAlimento(alimento: AlimentoDetalhe) {
    this.alimentoEmitido.emit(alimento)
  }

  public executarRecarregamento() {
    this.recarregar.emit()
  }
}
