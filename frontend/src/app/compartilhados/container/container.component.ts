import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rng-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  public isAberto: boolean = false

  constructor() { }

  ngOnInit(): void {
  }


  public mudarIsAberto(): void {
    this.isAberto = !this.isAberto
  }
}
