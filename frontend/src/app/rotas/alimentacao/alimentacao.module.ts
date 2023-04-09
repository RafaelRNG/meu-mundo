import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlimentacaoRoutingModule } from './alimentacao-routing.module';
import { AlimentacaoComponent } from './alimentacao.component';
import { CompartilhadosModule } from 'src/app/compartilhados/compartilhados.module';

@NgModule({
  declarations: [
    AlimentacaoComponent
  ],
  imports: [
    CommonModule,
    AlimentacaoRoutingModule,
    CompartilhadosModule
  ],
  exports: [
    AlimentacaoComponent
  ]
})
export class AlimentacaoModule { }
