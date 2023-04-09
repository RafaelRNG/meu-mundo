import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rng-navegacao-lateral',
  templateUrl: './navegacao-lateral.component.html',
  styleUrls: ['./navegacao-lateral.component.scss']
})
export class NavegacaoLateralComponent implements OnInit {

  @Input() public isAberto: boolean = false

  constructor() { }

  ngOnInit(): void {
  }
}
