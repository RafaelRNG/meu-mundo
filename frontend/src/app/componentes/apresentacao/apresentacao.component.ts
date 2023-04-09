import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rng-apresentacao',
  templateUrl: './apresentacao.component.html',
  styleUrls: ['./apresentacao.component.scss']
})
export class ApresentacaoComponent implements OnInit {

  @Input() public urlImagem: string = ""
  @Input() public titulo: string = ""
  @Input() public subTitulo!: string

  constructor() { }

  ngOnInit(): void {
  }

}
