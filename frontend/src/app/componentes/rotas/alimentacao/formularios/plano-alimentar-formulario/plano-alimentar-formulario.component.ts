import { Component, OnInit } from '@angular/core';
import { RefeicaoDetalhe } from 'src/app/tipos/PlanoAlimentar.tipo';
import { RefeicaoService } from '../../servicos/refeicao.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlanoAlimentarService } from '../../servicos/plano-alimentar.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'rng-plano-alimentar-formulario',
  templateUrl: './plano-alimentar-formulario.component.html',
  styleUrls: ['./plano-alimentar-formulario.component.scss']
})
export class PlanoAlimentarFormularioComponent implements OnInit {

  public planoFormulario!: FormGroup

  refeicoes: RefeicaoDetalhe[] = []

  constructor(private refeicaoServico: RefeicaoService,
    private planoAlimentarServico: PlanoAlimentarService,
    private planoConstrutor: FormBuilder,
    private bar: MatSnackBar,
    private rota: Router) { }

  ngOnInit(): void {
    this.construirFormulario()
    this.retornarRefeicoes()
  }

  public salvarPlanoAlimentar() {
    const corpoPlanoALimentar = this.planoFormulario.value
    this.planoAlimentarServico.salvarPlanoAlimentar(corpoPlanoALimentar)
      .subscribe({
        next: () => {
          this.bar.open('Plano alimentar salvo com sucesso!', 'X', {
            panelClass: ['mensagem-sucesso'],
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000
          })

          this.rota.navigate(['/alimentacao'])
        },
        error: () => {
          this.bar.open('Erro ao tentar salvar plano alimentar!', 'X', {
            panelClass: ['mensagem-erro'],
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000
          })
        }
      })
  }

  private construirFormulario(): void {
    this.planoFormulario = this.planoConstrutor.group({
      nome: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      descricao: [''],
      refeicoes: [[], [Validators.required, Validators.min(1)]]
    })
  }

  private retornarRefeicoes(): void {
    this.refeicaoServico.retornarRefeicoes().subscribe({
      next: resposta => this.refeicoes = resposta
    })
  }
}
