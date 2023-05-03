import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AlimentoDetalhe } from '../../../../tipos/PlanoAlimentar.tipo';
import { AlimentoService } from '../servicos/alimento.service';

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
    private alimentoService: AlimentoService) { }

  ngOnInit(): void {
    this.criarFormularioDetalhe()
    this.retornarAlimentos()
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
        next: resposta => {
          this.alimentos = resposta
        }
      })
  }
}
