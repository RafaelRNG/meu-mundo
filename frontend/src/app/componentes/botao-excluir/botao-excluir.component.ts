import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComponentesService } from '../componentes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'rng-botao-excluir',
  templateUrl: './botao-excluir.component.html',
  styleUrls: ['./botao-excluir.component.scss']
})
export class BotaoExcluirComponent implements OnInit {

  @Input() public informacoes!: { rota: string, codigo: number, mensagemSucesso: string, mensagemErro: string }
  @Output() public executarAlgo: EventEmitter<any> = new EventEmitter<any>()
  public confirmar: boolean = false

  constructor(private componentService: ComponentesService, private rota: Router) { }

  ngOnInit(): void {
  }

  public confirmarDelecao() {
    this.confirmar = !this.confirmar
  }

  public deletarItem() {
    this.componentService.excluirItem(this.informacoes.rota, this.informacoes.codigo, this.informacoes.mensagemSucesso, this.informacoes.mensagemErro)
      .subscribe({
        next: () => {
          this.executarAlgo.emit()
          this.rota.navigate(['/alimentacao'])
        },
        error: () => {
          this.confirmarDelecao()
        }
      })
  }
}
