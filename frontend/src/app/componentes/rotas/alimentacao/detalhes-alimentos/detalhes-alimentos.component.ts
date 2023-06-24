import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AlimentoDetalhe, DetalhesDoAlimento } from '../../../../tipos/PlanoAlimentar.tipo';
import { AlimentoService } from '../servicos/alimento.service';
import { CompartilhadosService } from 'src/app/compartilhados/compartilhados.service';
import { DetalheAlimentoService } from '../servicos/detalhe-alimento.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'rng-detalhes-alimentos',
  templateUrl: './detalhes-alimentos.component.html',
  styleUrls: ['./detalhes-alimentos.component.scss']
})
export class DetalhesAlimentosComponent implements OnInit {

  public temCodigo?: number
  public praAlterar: boolean = false
  public formularioDetalhe!: FormGroup
  public alimentos!: AlimentoDetalhe[]
  public detalheAlimento!: DetalhesDoAlimento


  public cabecalho = ['alimento', 'pesoBruto', 'carboidrato', 'proteina', 'gordura', 'ações']
  public detalhesAlimentos!: DetalhesDoAlimento[]

  public totalElementos!: number
  public tamanhoPagina!: number

  constructor(public ref: MatDialogRef<DetalhesAlimentosComponent>,
    private detalheConstrutor: FormBuilder,
    private alimentoService: AlimentoService,
    private detalheAlimentoService: DetalheAlimentoService,
    private compartilhadosService: CompartilhadosService) { }

  ngOnInit(): void {
    this.criarFormularioDetalhe()
    this.retornarAlimentos()
    this.retornarDetalhesAlimentos()
  }

  public salvarDetalhesAlimentos(): void {

    const detalhesAlimentoParaSalvar = {
      ...this.formularioDetalhe.value,
      alimento: this.formularioDetalhe.controls['alimento'].value.codigo
    }

    this.detalheAlimentoService.salvarDetalhesAlimentos(detalhesAlimentoParaSalvar)
      .subscribe({
        next: () => this.compartilhadosService.ativarSnackBar('Detalhe do alimento salvo com sucesso!', 'mensagem-sucesso'),
        error: () => this.compartilhadosService.ativarSnackBar('Erro ao tentar salvar detalhe do alimento', 'mensagem-erro')

      })
  }

  public recuperarDetalheParaAlterar(detalheAlimento: DetalhesDoAlimento) {
    this.temCodigo = detalheAlimento.codigo
    if (this.temCodigo) {
      this.formularioDetalhe.setValue(detalheAlimento)
    }
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

  public emitirAlterarDetalhe(detalhe: DetalhesDoAlimento): void {
    this.temCodigo = detalhe.codigo
    if (this.temCodigo) {
      this.praAlterar = true
      this.formularioDetalhe.controls['pesoBruto'].setValue(detalhe.pesoBruto)
      this.formularioDetalhe.controls['carbo'].setValue(detalhe.carbo)
      this.formularioDetalhe.controls['proteina'].setValue(detalhe.proteina)
      this.formularioDetalhe.controls['gordura'].setValue(detalhe.gordura)
      this.formularioDetalhe.controls['alimento'].setValue(detalhe.alimento)
    }
  }

  public salvarEdicaoDetalhe() {
    if (this.temCodigo) {

      const detalhesAlimentoAlterar = {
        ...this.formularioDetalhe.value,
        alimento: this.formularioDetalhe.controls['alimento'].value.codigo
      }
      this.detalheAlimentoService.alterarDetalheAlimentos(this.temCodigo, detalhesAlimentoAlterar)
        .subscribe({
          next: () => {
            this.compartilhadosService.ativarSnackBar('Detalhe alterado com sucesso!', 'mensagem-sucesso')
            this.cancelarAlteracao()
            this.retornarDetalhesAlimentos()
          },
          error: () => this.compartilhadosService.ativarSnackBar('Erro ao tentar alterar o detalhe do alimento!', 'mensagem-erro')
        })
    }
  }

  public cancelarAlteracao(): void {
    this.temCodigo = undefined
    this.praAlterar = false
    this.formularioDetalhe.controls['pesoBruto'].setValue(0)
    this.formularioDetalhe.controls['carbo'].setValue(0)
    this.formularioDetalhe.controls['proteina'].setValue(0)
    this.formularioDetalhe.controls['gordura'].setValue(0)
    this.formularioDetalhe.controls['alimento'].setValue('')
  }

  private criarFormularioDetalhe(): void {

    this.formularioDetalhe = this.detalheConstrutor.group({
      pesoBruto: [0, [Validators.required, Validators.min(0.01)]],
      carbo: [0, [Validators.required, Validators.min(0.01)]],
      proteina: [0, [Validators.required, Validators.min(0.01)]],
      gordura: [0],
      alimento: ['', [Validators.required]]
    })
  }

  private retornarAlimentos(): void {
    this.alimentoService.retornarAlimentos()
      .subscribe({
        next: resposta => this.alimentos = resposta,
        error: () => this.compartilhadosService.ativarSnackBar('Não foi possível carregar os alimentos!', 'mensagem-erro')
      })
  }

}
