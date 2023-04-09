//importações do Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importações do angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

//Importações de componentes
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { NavegacaoLateralComponent } from './navegacao-lateral/navegacao-lateral.component';

@NgModule({
  declarations: [
    CabecalhoComponent,
    NavegacaoLateralComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    CabecalhoComponent,
    NavegacaoLateralComponent
  ]
})
export class ComponentesModule { }
