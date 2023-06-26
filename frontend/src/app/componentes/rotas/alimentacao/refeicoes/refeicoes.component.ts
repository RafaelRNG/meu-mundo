import { Component, OnInit } from '@angular/core';
import { DetalheAlimentoService } from '../servicos/detalhe-alimento.service';

@Component({
  selector: 'rng-refeicoes',
  templateUrl: './refeicoes.component.html',
  styleUrls: ['./refeicoes.component.scss']
})
export class RefeicoesComponent implements OnInit {

  constructor(private detalheAlimentoServico: DetalheAlimentoService) { }

  ngOnInit(): void {
  }

}
