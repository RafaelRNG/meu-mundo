import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentacaoComponent } from './alimentacao.component';
import { DetalheAlimentacaoComponent } from './detalhe-alimentacao/detalhe-alimentacao.component';
import { CriarPlanoAlimentarComponent } from './criar-plano-alimentar/criar-plano-alimentar.component';

const routes: Routes = [
  { path: '', component: AlimentacaoComponent },
  { path: 'criar', component: CriarPlanoAlimentarComponent },
  { path: ':codigo', component: DetalheAlimentacaoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlimentacaoRoutingModule { }
