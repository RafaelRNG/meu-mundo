//importações do Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//Importações do angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

//Importações de componentes
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { NavegacaoLateralComponent } from './navegacao-lateral/navegacao-lateral.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { PlanosAlimentaresComponent } from './rotas/alimentacao/planos-alimentares/planos-alimentares.component';
import { CardPlanoAlimentarComponent } from './rotas/alimentacao/card-plano-alimentar/card-plano-alimentar.component';
import { ErroRespostaComponent } from './erro-resposta/erro-resposta.component';

@NgModule({
  declarations: [
    CabecalhoComponent,
    NavegacaoLateralComponent,
    ApresentacaoComponent,
    PlanosAlimentaresComponent,
    CardPlanoAlimentarComponent,
    ErroRespostaComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,

  ],
  exports: [
    CabecalhoComponent,
    NavegacaoLateralComponent,
    ApresentacaoComponent,
    PlanosAlimentaresComponent,
    ErroRespostaComponent
  ]
})
export class ComponentesModule { }
