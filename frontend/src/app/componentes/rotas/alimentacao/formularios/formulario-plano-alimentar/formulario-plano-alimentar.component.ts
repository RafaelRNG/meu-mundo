import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'rng-formulario-plano-alimentar',
  templateUrl: './formulario-plano-alimentar.component.html',
  styleUrls: ['./formulario-plano-alimentar.component.scss']
})
export class FormularioPlanoAlimentarComponent implements OnInit {

  constructor(public ref: MatDialogRef<FormularioPlanoAlimentarComponent>) { }

  ngOnInit(): void {
  }

}
