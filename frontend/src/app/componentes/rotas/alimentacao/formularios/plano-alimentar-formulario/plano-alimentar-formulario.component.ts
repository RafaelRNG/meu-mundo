import { Component, OnInit } from '@angular/core';
import { PlanoAlimentar, RefeicaoDetalhe } from 'src/app/tipos/PlanoAlimentar.tipo';
import { RefeicaoService } from '../../servicos/refeicao.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlanoAlimentarService } from '../../servicos/plano-alimentar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CompartilhadosService } from 'src/app/compartilhados/compartilhados.service';

@Component({
  selector: 'rng-plano-alimentar-formulario',
  templateUrl: './plano-alimentar-formulario.component.html',
  styleUrls: ['./plano-alimentar-formulario.component.scss']
})
export class PlanoAlimentarFormularioComponent implements OnInit {

  public planoFormulario!: FormGroup
  public rotaCodigo!: number

  refeicoes: RefeicaoDetalhe[] = []

  constructor(private refeicaoServico: RefeicaoService,
    private planoAlimentarServico: PlanoAlimentarService,
    private planoConstrutor: FormBuilder,
    private compartilhadosServico: CompartilhadosService,
    private rota: Router,
    private rotaAtiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.construirFormulario()
    this.retornarRefeicoes()
    this.carregarCodigoEalterarValorFormulario()
  }

  public salvarPlanoAlimentar(): void {
    const corpoPlanoALimentar = this.planoFormulario.value
    this.planoAlimentarServico.salvarPlanoAlimentar(corpoPlanoALimentar)
      .subscribe({
        next: () => {
          this.compartilhadosServico.ativarSnackBar('Plano alimentar salvo com sucesso!', 'mensagem-sucesso')
          this.rota.navigate(['/alimentacao'])
        },
        error: () => {
          this.compartilhadosServico.ativarSnackBar('Erro ao tentar salvar plano alimentar!', 'mensagem-erro')
        }
      })
  }

  public alterarPlanoAlimentar(): void {
    this.planoAlimentarServico.alterarPlanoAlimentar(this.rotaCodigo, this.planoFormulario.value)
      .subscribe({
        next: () => {
          this.compartilhadosServico.ativarSnackBar('Plano alimentar alterado com sucesso!', 'mensagem-sucesso')
          this.rota.navigate([`/alimentacao/${this.rotaCodigo}`])
        },
        error: () => {
          this.compartilhadosServico.ativarSnackBar('Erro ao tentar salvar plano alimentar!', 'mensagem-erro')
        }
      })
  }

  private carregarCodigoEalterarValorFormulario() {
    this.rotaAtiva.params.subscribe(rota => this.rotaCodigo = rota['codigo'])

    if (this.rotaCodigo) {
      this.planoAlimentarServico.retornarPlanoAlimentar(this.rotaCodigo)
        .subscribe({
          next: (planoAlimentar: PlanoAlimentar) => {
            this.planoFormulario.controls['nome'].setValue(planoAlimentar.nome)
            this.planoFormulario.controls['descricao'].setValue(planoAlimentar.descricao)
          }
        })
    }
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
