import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanoAlimentar } from '../../../../tipos/PlanoAlimentar.tipo';
import { PlanoAlimentarService } from '../servicos/plano-alimentar.service';

@Component({
  selector: 'rng-plano-alimentar',
  templateUrl: './plano-alimentar.component.html',
  styleUrls: ['./plano-alimentar.component.scss']
})
export class PlanoAlimentarComponent implements OnInit {

  public codigo!: number
  public planoAlimentar!: PlanoAlimentar

  constructor(private router: ActivatedRoute, private planoAlimentarServico: PlanoAlimentarService) { }

  ngOnInit(): void {
    this.retornarPlanoAlimentar()
  }

  public retornarPlanoAlimentar() {

    this.router.params.subscribe(params => this.codigo = params['codigo'])

    this.planoAlimentarServico.retornarPlanoAlimentar(this.codigo)
      .subscribe({
        next: resposta => {
          this.planoAlimentar = resposta
        },
        error: () => console.log('deu ruim!')
      })
  }
}
