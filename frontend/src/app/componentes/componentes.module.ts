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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';

//Importações de componentes
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { NavegacaoLateralComponent } from './navegacao-lateral/navegacao-lateral.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { PlanosAlimentaresComponent } from './rotas/alimentacao/planos-alimentares/planos-alimentares.component';
import { CardPlanoAlimentarComponent } from './rotas/alimentacao/card-plano-alimentar/card-plano-alimentar.component';
import { ErroRespostaComponent } from './erro-resposta/erro-resposta.component';
import { PlanoAlimentarComponent } from './rotas/alimentacao/plano-alimentar/plano-alimentar.component';
import { PlanoAlimentarFormularioComponent } from './rotas/alimentacao/plano-alimentar-formulario/plano-alimentar-formulario.component';
import { BotaoExcluirComponent } from './botao-excluir/botao-excluir.component';
import { CarregandoComponent } from './carregando/carregando.component';
import { MenuCriarEntidadesComponent } from './rotas/alimentacao/menu-criar-entidades/menu-criar-entidades.component';
import { AlimentoComponent } from './rotas/alimentacao/alimento/alimento.component';
import { ListaAlimentoComponent } from './rotas/alimentacao/lista-alimento/lista-alimento.component';
import { DetalhesAlimentosComponent } from './rotas/alimentacao/detalhes-alimentos/detalhes-alimentos.component';
import { RefeicoesComponent } from './rotas/alimentacao/refeicoes/refeicoes.component';

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
    BotaoExcluirComponent,
    CarregandoComponent,
    MenuCriarEntidadesComponent,
    AlimentoComponent,
    ListaAlimentoComponent,
    DetalhesAlimentosComponent,
    RefeicoesComponent,
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
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatTableModule,
    MatAutocompleteModule,
    MatPaginatorModule
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
