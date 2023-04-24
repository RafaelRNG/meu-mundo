import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AlimentoService } from '../servicos/alimento.service';
import { CompartilhadosService } from 'src/app/compartilhados/compartilhados.service';

@Component({
  selector: 'rng-alimento',
  templateUrl: './alimento.component.html',
  styleUrls: ['./alimento.component.scss']
})
export class AlimentoComponent implements OnInit {

  public alimentoFormulario!: FormGroup

  constructor(public ref: MatDialogRef<AlimentoComponent>,
    private alimentoConstrutor: FormBuilder,
    private alimentoServico: AlimentoService,
    private compartilhadosServico: CompartilhadosService) { }

  ngOnInit(): void {
    this.criarFormularioAlimento()
  }

  public salvarAlimento() {
    const corpoAlimento = this.alimentoFormulario.value
    this.alimentoServico.salvarAlimento(corpoAlimento)
      .subscribe({
        next: () => this.compartilhadosServico.ativarSnackBar('Alimento salvo com sucesso!', 'mensagem-sucesso'),
        error: () => this.compartilhadosServico.ativarSnackBar('Erro ao tentar salvar alimento!', 'mensagem-erro')
      })
  }

  private criarFormularioAlimento(): void {
    this.alimentoFormulario = this.alimentoConstrutor.group({
      nome: ['', [Validators.required, Validators.maxLength(200)]]
    })
  }
}
