import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AlimentoDetalhe, DetalhesDoAlimento } from '../../../../tipos/PlanoAlimentar.tipo';
import { AlimentoService } from '../servicos/alimento.service';
import { CompartilhadosService } from 'src/app/compartilhados/compartilhados.service';
import { DetalheAlimentoService } from '../servicos/detalhe-alimento.service';

@Component({
  selector: 'rng-detalhes-alimentos',
  templateUrl: './detalhes-alimentos.component.html',
  styleUrls: ['./detalhes-alimentos.component.scss']
})
export class DetalhesAlimentosComponent implements OnInit {

  public formularioDetalhe!: FormGroup
  public alimentos!: AlimentoDetalhe[]

  constructor(public ref: MatDialogRef<DetalhesAlimentosComponent>,
    private detalheConstrutor: FormBuilder,
    private alimentoService: AlimentoService,
    private detalheAlimentoService: DetalheAlimentoService,
    private compartilhadosService: CompartilhadosService) { }

  ngOnInit(): void {
    this.criarFormularioDetalhe()
    this.retornarAlimentos()
  }

  public salvarPlanoAlimentar(): void {

    const detalhesAlimentoParaSalvar = {
      ...this.formularioDetalhe.value,
      alimento: this.formularioDetalhe.controls['alimento'].value.codigo
    }

    this.detalheAlimentoService.salvarPlanoAlimentar(detalhesAlimentoParaSalvar)
      .subscribe({
        next: () => this.compartilhadosService.ativarSnackBar('Detalhe do alimento salvo com sucesso!', 'mensagem-sucesso'),
        error: error => {
          console.log(error)
          this.compartilhadosService.ativarSnackBar('Erro ao tentar salvar detalhe do alimento', 'mensagem-erro')
        }
      })
  }

  private criarFormularioDetalhe(): void {

    this.formularioDetalhe = this.detalheConstrutor.group({
      pesoBruto: [0, [Validators.required, Validators.min(0.01)]],
      carbo: [0, [Validators.required, Validators.min(0.01)]],
      proteina: [0, [Validators.required, Validators.min(0.01)]],
      gordura: [0],
      codigoAlimento: [],
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
