import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'
import { AlimentacaoService } from '../../alimentacao.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'rng-formulario-plano-alimentar',
  templateUrl: './formulario-plano-alimentar.component.html',
  styleUrls: ['./formulario-plano-alimentar.component.scss']
})
export class FormularioPlanoAlimentarComponent implements OnInit {

  public formularioPlano!: FormGroup

  constructor(public ref: MatDialogRef<FormularioPlanoAlimentarComponent>,
    private formulario: FormBuilder,
    private alimentacaoServico: AlimentacaoService,
    private bar: MatSnackBar) { }

  ngOnInit(): void {
    this.criarFormulario()
  }

  public criarFormulario(): void {
    this.formularioPlano = this.formulario.group({
      nome: ['', [Validators.required, Validators.maxLength(30)]],
      descricao: ['']
    })
  }

  public salvarPlanoAlimentar(): void {
    this.alimentacaoServico.salvarPlanoAlimentar(this.formularioPlano.value).subscribe({
      next: () => {
        this.bar.open('Plano alimentar salvo com sucesso!', '', {
          horizontalPosition: 'end',
          verticalPosition: 'top',
          duration: 3000,
          panelClass: ["mensagem-sucesso"]
        })
      },
      error: () => {
        this.bar.open('Erro ao tentar salvar plano alimentar!', '', {
          horizontalPosition: 'end',
          verticalPosition: 'top',
          duration: 3000,
          panelClass: ["mensagem-erro"]
        })
      }
    })
  }
}
