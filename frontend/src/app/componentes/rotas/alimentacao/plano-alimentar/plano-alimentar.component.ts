import { Component, OnInit } from '@angular/core';
import { AlimentacaoService } from '../alimentacao.service';
import { ActivatedRoute } from '@angular/router';
import { PlanoAlimentar } from '../../../../tipos/PlanoAlimentar.tipo';

@Component({
  selector: 'rng-plano-alimentar',
  templateUrl: './plano-alimentar.component.html',
  styleUrls: ['./plano-alimentar.component.scss']
})
export class PlanoAlimentarComponent implements OnInit {

  public codigo!: number
  public planoAlimentar!: PlanoAlimentar

  constructor(private router: ActivatedRoute, private alimentacaoServico: AlimentacaoService) { }

  ngOnInit(): void {
    this.retornarPlanoAlimentar()
  }

  public retornarPlanoAlimentar() {

    this.router.params.subscribe(params => this.codigo = params['codigo'])

    this.alimentacaoServico.retornarPlanoAlimentar(this.codigo)
      .subscribe({
        next: resposta => {
          this.planoAlimentar = resposta
          console.log(resposta)
        },
        error: () => console.log('deu ruim!')
      })
  }
}
