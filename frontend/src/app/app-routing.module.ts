import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './rotas/inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent, title: 'GP - Início' },
  { path: 'alimentacao', loadChildren: () => import('./rotas/alimentacao/alimentacao.module').then(modulo => modulo.AlimentacaoModule), title: 'GP - Alimentação' },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
