import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'rng-formulario-plano-alimentar',
  templateUrl: './formulario-plano-alimentar.component.html',
  styleUrls: ['./formulario-plano-alimentar.component.scss']
})
export class FormularioPlanoAlimentarComponent implements OnInit {

  public formularioPlano!: FormGroup

  constructor(public ref: MatDialogRef<FormularioPlanoAlimentarComponent>, private formulario: FormBuilder) { }

  ngOnInit(): void {
    this.criarFormulario()
  }

  public criarFormulario(): void {
    this.formularioPlano = this.formulario.group({
      nome: ['', [Validators.required, Validators.maxLength(30)]],
      descricao: ['']
    })
  }
}
