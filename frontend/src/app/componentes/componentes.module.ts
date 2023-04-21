//importações do Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

//Importações do angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';

//Importações de componentes
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { NavegacaoLateralComponent } from './navegacao-lateral/navegacao-lateral.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { PlanosAlimentaresComponent } from './rotas/alimentacao/planos-alimentares/planos-alimentares.component';
import { CardPlanoAlimentarComponent } from './rotas/alimentacao/card-plano-alimentar/card-plano-alimentar.component';
import { ErroRespostaComponent } from './erro-resposta/erro-resposta.component';
import { PlanoAlimentarComponent } from './rotas/alimentacao/plano-alimentar/plano-alimentar.component';
import { PlanoAlimentarFormularioComponent } from './rotas/alimentacao/formularios/plano-alimentar-formulario/plano-alimentar-formulario.component';

@NgModule({
  declarations: [
    CabecalhoComponent,
    NavegacaoLateralComponent,
    ApresentacaoComponent,
    PlanosAlimentaresComponent,
    CardPlanoAlimentarComponent,
    ErroRespostaComponent,
    PlanoAlimentarComponent,
    PlanoAlimentarFormularioComponent,
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
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSnackBarModule
  ],
  exports: [
    CabecalhoComponent,
    NavegacaoLateralComponent,
    ApresentacaoComponent,
    PlanosAlimentaresComponent,
    ErroRespostaComponent,
    PlanoAlimentarComponent,
    PlanoAlimentarFormularioComponent
  ]
})
export class ComponentesModule { }
