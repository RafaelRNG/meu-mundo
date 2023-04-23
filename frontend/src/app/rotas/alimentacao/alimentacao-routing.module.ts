import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheAlimentacaoComponent } from './detalhe-alimentacao/detalhe-alimentacao.component';
import { CriarPlanoAlimentarComponent } from './criar-plano-alimentar/criar-plano-alimentar.component';
import { AlimentacaoComponent } from './alimentacoes/alimentacao.component';
import { AlterarPlanoAlimentarComponent } from './alterar-plano-alimentar/alterar-plano-alimentar.component';

const routes: Routes = [
  { path: '', component: AlimentacaoComponent },
  { path: 'criar', component: CriarPlanoAlimentarComponent },
  { path: ':codigo', component: DetalheAlimentacaoComponent },
  { path: 'alterar/:codigo', component: AlterarPlanoAlimentarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlimentacaoRoutingModule { }
