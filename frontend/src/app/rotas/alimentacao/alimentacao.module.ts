import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlimentacaoRoutingModule } from './alimentacao-routing.module';
import { AlimentacaoComponent } from './alimentacao.component';
import { CompartilhadosModule } from 'src/app/compartilhados/compartilhados.module';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { DetalheAlimentacaoComponent } from './detalhe-alimentacao/detalhe-alimentacao.component';

@NgModule({
  declarations: [
    AlimentacaoComponent,
    DetalheAlimentacaoComponent
  ],
  imports: [
    CommonModule,
    AlimentacaoRoutingModule,
    CompartilhadosModule,
    ComponentesModule
  ],
  exports: [
    AlimentacaoComponent
  ]
})
export class AlimentacaoModule { }
