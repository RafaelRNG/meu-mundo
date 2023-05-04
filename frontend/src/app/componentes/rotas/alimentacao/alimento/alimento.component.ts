import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AlimentoService } from '../servicos/alimento.service';
import { CompartilhadosService } from 'src/app/compartilhados/compartilhados.service';
import { AlimentoDetalhe } from 'src/app/tipos/PlanoAlimentar.tipo';

@Component({
  selector: 'rng-alimento',
  templateUrl: './alimento.component.html',
  styleUrls: ['./alimento.component.scss']
})
export class AlimentoComponent implements OnInit {

  public temCodigo?: number
  public praAlterar: boolean = false
  public carregando: boolean = true
  public alimentoFormulario!: FormGroup
  public alimentos!: AlimentoDetalhe[]

  constructor(public ref: MatDialogRef<AlimentoComponent>,
    private alimentoConstrutor: FormBuilder,
    private alimentoServico: AlimentoService,
    private compartilhadosServico: CompartilhadosService) { }

  ngOnInit(): void {
    this.criarFormularioAlimento()
    this.alterarAlimento()
    this.retornarAlimentos()
  }

  public salvarAlimento(): void {
    const corpoAlimento = this.alimentoFormulario.value
    this.alimentoServico.salvarAlimento(corpoAlimento)
      .subscribe({
        next: () => {
          this.compartilhadosServico.ativarSnackBar('Alimento salvo com sucesso!', 'mensagem-sucesso')
          this.alimentoFormulario.reset()
          this.retornarAlimentos()
        },
        error: () => this.compartilhadosServico.ativarSnackBar('Erro ao tentar salvar alimento!', 'mensagem-erro')
      })
  }

  public alterarAlimento() {
    if (this.temCodigo) {
      const corpoAlimento = this.alimentoFormulario.value
      this.alimentoServico.alterarAlimento(this.temCodigo, corpoAlimento)
        .subscribe({
          next: () => {
            this.retornarAlimentos()
            this.cancelarAlteracao()
            this.compartilhadosServico.ativarSnackBar('Alimento alterado com sucesso!', 'mensagem-sucesso')
          },
          error: () => this.compartilhadosServico.ativarSnackBar('Erro ao tentar alterar alimento!', 'mensagem-erro')
        })
    }
  }

  public carregarAlimentoEmitido(alimento: AlimentoDetalhe): void {
    this.temCodigo = alimento.codigo
    if (this.temCodigo) {
      this.praAlterar = true
      this.alimentoFormulario.controls['nome'].setValue(alimento.nome)
    }
  }

  public cancelarAlteracao(): void {
    this.temCodigo = undefined
    this.praAlterar = false
    this.alimentoFormulario.controls['nome'].setValue(' ')
  }

  public retornarAlimentos(): void {
    this.alimentoServico.retornarAlimentos()
      .subscribe({
        next: resposta => {
          this.carregando = false
          this.alimentos = resposta
        },
        error: () => {
          this.carregando = false
          this.compartilhadosServico.ativarSnackBar('Erro ao tentar carregar a lista de alimentos!', 'mensagem-erro')
        }
      })
  }

  private criarFormularioAlimento(): void {
    this.alimentoFormulario = this.alimentoConstrutor.group({
      nome: ['', [Validators.required, Validators.maxLength(200)]]
    })
  }
}
