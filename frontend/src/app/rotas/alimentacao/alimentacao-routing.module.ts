import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentacaoComponent } from './alimentacao.component';
import { DetalheAlimentacaoComponent } from './detalhe-alimentacao/detalhe-alimentacao.component';

const routes: Routes = [
  { path: '', component: AlimentacaoComponent },
  { path: ':codigo', component: DetalheAlimentacaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlimentacaoRoutingModule { }
